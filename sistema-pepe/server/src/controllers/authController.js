import prisma from '../lib/prisma.js'
import bcrypt from 'bcryptjs'

export class AuthController {
  async register(req, res) {
    try {
      const { password, ...userData } = req.body
      
      // Verificar si el usuario ya existe
      const existingUser = await prisma.users.findUnique({
        where: { email: userData.email }
      })

      if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe' })
      }

      // Crear usuario
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await prisma.users.create({
        data: {
          ...userData,
          password: hashedPassword,
        }
      })

      res.status(201).json({
        success: true,
        user: {
          documentId: user.documentId,
          name: user.name,
          email: user.email
        }
      })
    } catch (error) {
      console.error('Error en registro:', error)
      res.status(500).json({ message: error.message || 'Error en el servidor' })
    }
  }
}