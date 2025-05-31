import prisma from '../lib/prisma.js'
import { hashPassword, comparePasswords } from '../utils/encryption.js'
import { generateToken } from '../config/jwt.js'

export const registerUser = async (userData) => {
  const { email, password, ...restData } = userData

  // Verificar si el usuario ya existe
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    throw new Error('User already exists')
  }

  const hashedPassword = await hashPassword(password)

  try {
    const newUser = await prisma.user.create({
      data: {
        ...restData,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
        documentType: true
      }
    })

    // Generar token JWT
    const token = generateToken({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name
    })

    return { user: newUser, token }
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`)
  }
}

export const validateCredentials = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        documentType: true
      }
    })

    if (!user || !(await comparePasswords(password, user.password))) {
      throw new Error('Invalid credentials')
    }

    return user
  } catch (error) {
    throw new Error(`Authentication error: ${error.message}`)
  }
}