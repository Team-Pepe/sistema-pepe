import { prismaDB1, prismaDB2 } from '../lib/prisma.js'
import { hashPassword } from '../utils/encryption.js'

export const createUser = async (userData) => {
  const { email, password, ...mainUserData } = userData
  
  // Hash password before storing
  const hashedPassword = await hashPassword(password)
  
  // Start transaction to ensure both operations succeed or fail together
  try {
    // Create user in DB1 (main user data)
    const user = await prismaDB1.user.create({
      data: {
        ...mainUserData,
        email,
        password: hashedPassword
      }
    })

    // Create user in DB2 (authentication data)
    await prismaDB2.userDB2.create({
      data: {
        email,
        password: hashedPassword
      }
    })

    return user
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`)
  }
}