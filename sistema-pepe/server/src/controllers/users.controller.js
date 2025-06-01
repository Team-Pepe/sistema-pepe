import { db1 } from '../lib/prisma.js'

export class UsersController {
  async getAll(req, res) {
    try {
      const users = await db1.users.findMany({
        include: {
          documentType: true
        }
      })
      res.json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async create(req, res) {
    try {
      const { birthdate, ...userData } = req.body // Extraer birthdate para no enviarlo a Prisma
      
      const user = await db1.users.create({
        data: {
          ...userData,
          documentTypeId: parseInt(userData.documentTypeId),
          age: parseInt(userData.age)
        },
        include: {
          documentType: true
        }
      })

      res.status(201).json(user)
    } catch (error) {
      console.error('Error al crear usuario:', error)
      res.status(500).json({ 
        message: 'Error al crear usuario',
        error: error.message 
      })
    }
  }

  async update(req, res) {
    try {
      const { documentId } = req.params
      const user = await db1.users.update({
        where: { documentId },
        data: req.body,
        include: {
          documentType: true
        }
      })
      res.json(user)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async delete(req, res) {
    try {
      const { documentId } = req.params
      await db1.users.delete({
        where: { documentId }
      })
      res.json({ message: 'Usuario eliminado' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async getDocumentTypes(req, res) {
    try {
      const documentTypes = await db1.documentType.findMany()
      res.json(documentTypes)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}