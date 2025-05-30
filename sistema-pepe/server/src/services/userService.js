import { prismaDB1, prismaDB2 } from '../lib/prisma.js'
import { hashPassword } from '../utils/encryption.js'

export const createUser = async (userData) => {
  const { email, password, ...mainUserData } = userData
  const hashedPassword = await hashPassword(password)

  try {
    // Comenzar transacción en DB1
    const user = await prismaDB1.$transaction(async (tx) => {
      // Crear usuario principal
      const mainUser = await tx.user.create({
        data: {
          ...mainUserData,
          email,
          password: hashedPassword
        }
      })

      // Crear datos de autenticación en DB2
      await prismaDB2.userAuth.create({
        data: {
          email,
          password: hashedPassword
        }
      })

      return mainUser
    })

    return user
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`)
  }
}

export const validateAuth = async (email, password) => {
  try {
    // Verificar credenciales en DB2
    const authUser = await prismaDB2.userAuth.findUnique({
      where: { email }
    })

    if (!authUser) {
      throw new Error('Invalid credentials')
    }

    // Si la autenticación es exitosa, obtener datos completos de DB1
    const userData = await prismaDB1.user.findUnique({
      where: { email },
      include: {
        documentType: true
      }
    })

    return userData
  } catch (error) {
    throw new Error(`Authentication error: ${error.message}`)
  }
}