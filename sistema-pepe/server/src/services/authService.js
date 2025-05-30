import { prismaDB1, prismaDB2 } from '../lib/prisma.js'
import { hashPassword, comparePasswords } from '../utils/encryption.js'

export const registerUser = async (userData) => {
  const { email, password, ...restData } = userData
  const hashedPassword = await hashPassword(password)

  try {
    // Crear usuario en DB1 (datos principales)
    const user = await prismaDB1.user.create({
      data: {
        ...restData,
        email,
        password: hashedPassword,
      }
    })

    // Crear credenciales en DB2 (autenticación)
    await prismaDB2.userAuth.create({
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

export const validateCredentials = async (email, password) => {
  try {
    // Verificar credenciales en DB2
    const authUser = await prismaDB2.userAuth.findUnique({
      where: { email }
    })

    if (!authUser || !(await comparePasswords(password, authUser.password))) {
      throw new Error('Invalid credentials')
    }

    // Si las credenciales son válidas, obtener datos completos de DB1
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