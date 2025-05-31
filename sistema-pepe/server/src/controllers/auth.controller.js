import prisma from '../lib/prisma.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthController {
  async register(req, res) {
    try {
      // Validar que todos los campos requeridos estén presentes
      const requiredFields = ['name', 'documentTypeId', 'documentId', 'email', 'password', 'phone', 'address', 'age'];
      const missingFields = requiredFields.filter(field => !req.body[field]);
      
      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Campos requeridos faltantes: ${missingFields.join(', ')}`
        });
      }

      console.log('Datos de registro:', req.body);

      // Validar el formato del email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(req.body.email)) {
        return res.status(400).json({
          success: false,
          message: 'Formato de email inválido'
        });
      }

      const { password, ...userData } = req.body;

      // Verificar si el usuario ya existe
      const existingUser = await prisma.users.findFirst({
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

      // Validar que documentTypeId sea un número válido
      const documentType = await prisma.documentType.findUnique({
        where: { id: parseInt(userData.documentTypeId) }
      });

      console.log('Tipo de documento:', documentType);

      if (!documentType) {
        return res.status(400).json({
          success: false,
          message: 'Tipo de documento inválido'
        });
      }

      // Hash de la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crear usuario
      const user = await prisma.users.create({
        data: {
          ...userData,
          documentTypeId: parseInt(userData.documentTypeId),
          age: parseInt(userData.age),
          password: hashedPassword
        }
      });

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
      res.status(500).json({
        success: false,
        message: error.message || 'Error en el servidor'
      });
    }
  }
}