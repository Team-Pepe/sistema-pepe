import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export class AuthService {
  async register(userData) {
    const { name, documentTypeId, documentId, email, password, phone, address, age } = userData;

    // Verificar si el usuario ya existe (descomentar y mejorar la validación)
    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [
          { email },
          { documentId }
        ]
      }
    });

    if (existingUser) {
      throw new Error(
        existingUser.email === email 
          ? 'El email ya está registrado' 
          : 'El número de documento ya está registrado'
      );
    }

    // Validar que documentTypeId sea un número válido
    const documentType = await prisma.documentType.findUnique({
      where: { id: parseInt(documentTypeId) }
    });

    if (!documentType) {
      throw new Error('Tipo de documento inválido');
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario con los datos validados
    const user = await prisma.users.create({
      data: {
        name,
        documentTypeId: parseInt(documentTypeId),
        documentId,
        email: email.toLowerCase(),
        password: hashedPassword,
        phone,
        address,
        age: parseInt(age)
      }
    });

    // Generar token
    const token = jwt.sign(
      { id: user.documentId, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Retornar usuario sin la contraseña
    const { password: _, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
  }
}