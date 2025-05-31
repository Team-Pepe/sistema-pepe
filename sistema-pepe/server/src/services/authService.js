import prisma from '../lib/prisma.js'
import { hashPassword } from '../utils/encryption.js'
import { generateToken } from '../config/jwt.js'

export const registerUser = async (userData) => {
  const { email, password, ...restData } = userData

  try {
    // Check if user exists
    const existingUser = await prisma.users.findUnique({
      where: { email }
    })

    if (existingUser) {
      throw new Error('User already exists')
    }

    const hashedPassword = await hashPassword(password)

    // Create new user
    const newUser = await prisma.users.create({
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

    // Generate JWT token
    const token = generateToken({
      id: newUser.id,
      email: newUser.email
    })

    return { user: newUser, token }
  } catch (error) {
    console.error('Error in registerUser:', error)
    throw error
  }
}