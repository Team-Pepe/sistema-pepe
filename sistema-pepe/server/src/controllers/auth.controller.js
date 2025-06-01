import { db1, db2 } from '../lib/prisma.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthController {
  async register(req, res) {
    try {
      // Validar campos requeridos
      const requiredFields = ['name', 'documentTypeId', 'documentId', 'email', 'password', 'phone', 'address', 'age'];
      const missingFields = requiredFields.filter(field => !req.body[field]);
      
      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Campos requeridos faltantes: ${missingFields.join(', ')}`
        });
      }

      const { password, ...userData } = req.body;

      // Verificar si el usuario ya existe en la primera base de datos
      const existingUser = await db1.users.findFirst({
        where: {
          OR: [
            { email: userData.email },
            { documentId: userData.documentId }
          ]
        }
      });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: existingUser.email === userData.email 
            ? 'El email ya está registrado' 
            : 'El número de documento ya está registrado'
        });
      }

      // Verificar si el usuario existe en la segunda base de datos
      const existingLoginUser = await db2.loginUsers.findUnique({
        where: { email: userData.email }
      });

      if (existingLoginUser) {
        return res.status(400).json({
          success: false,
          message: 'El email ya está registrado en el sistema de login'
        });
      }

      // Validar tipo de documento
      const documentType = await db1.documentType.findUnique({
        where: { id: parseInt(userData.documentTypeId) }
      });

      if (!documentType) {
        return res.status(400).json({
          success: false,
          message: 'Tipo de documento inválido'
        });
      }

      // Hash de la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crear usuario en la primera base de datos
      const user = await db1.users.create({
        data: {
          ...userData,
          documentTypeId: parseInt(userData.documentTypeId),
          age: parseInt(userData.age),
          password: hashedPassword
        }
      });

      // Crear usuario en la segunda base de datos
      const loginUser = await db2.loginUsers.create({
        data: {
          email: userData.email,
          password: hashedPassword
        }
      });

      console.log('Usuario creado en sistema de login:', loginUser);

      // Generar token
      const token = jwt.sign(
        { id: user.documentId, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      // Retornar respuesta sin la contraseña
      const { password: _, ...userWithoutPassword } = user;
      res.status(201).json({
        success: true,
        data: {
          user: userWithoutPassword,
          token
        }
      });
    } catch (error) {
      console.error('Error en registro:', error);
      
      // Si hay error, intentar revertir las operaciones
      if (error.code === 'P2002') {
        // Error de unique constraint
        return res.status(400).json({
          success: false,
          message: 'El email o documento ya está registrado'
        });
      }

      res.status(500).json({
        success: false,
        message: error.message || 'Error en el servidor'
      });
    }
  }
}