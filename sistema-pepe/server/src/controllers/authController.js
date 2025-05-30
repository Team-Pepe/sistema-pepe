import bcrypt from 'bcryptjs';
import { prismaDB1, prismaDB2 } from '../lib/prisma.js';
import { createUser } from '../services/userService.js';

export const register = async (req, res) => {
  try {
    const userData = req.body;

    // Validación básica
    if (!userData.email || !userData.password) {
      return res.status(400).json({
        success: false,
        message: 'Email y contraseña son requeridos'
      });
    }

    // Calcular edad
    const age = calculateAge(userData.birthdate);

    // Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Crear usuario en DB1
    const userDB1 = await prismaDB1.user.create({
      data: {
        name: userData.name,
        documentTypeId: parseInt(userData.documentTypeId),
        documentId: userData.documentId,
        email: userData.email,
        password: hashedPassword,
        phone: userData.phone,
        address: userData.address,
        age
      }
    });

    // Crear usuario en DB2
    const userDB2 = await prismaDB2.userDB2.create({
      data: {
        email: userData.email,
        password: hashedPassword
      }
    });

    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      data: {
        id: userDB1.id,
        email: userDB1.email,
        name: userDB1.name
      }
    });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error al registrar usuario'
    });
  }
};

// Función auxiliar para calcular la edad
const calculateAge = (birthdate) => {
  const today = new Date();
  const birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  const monthDiff = today.getMonth() - birthdateObj.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
    age--;
  }
  
  return age;
};