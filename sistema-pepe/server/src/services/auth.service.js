import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export class AuthService {
  async register(userData) {
    const { name, documentTypeId, documentId, email, password, phone, address, age } = userData;

   /* // Verificar si el usuario ya existe
    const existingUser = await prisma.users.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw new Error('El usuario ya existe');
    }*/

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const user = await prisma.users.create({
      data: {
        name,
        documentTypeId,
        documentId,
        email,
        password: hashedPassword,
        phone,
        address,
        age
      }
    });

    // Generar token
    const token = jwt.sign(
      { id: user.documentId, email: user.email },  // Cambiado de user.id a user.documentId
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return { user, token };
  }
}