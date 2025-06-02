import bcrypt from 'bcryptjs'
import { db1, db2 } from '../lib/prisma.js'

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
      const { birthdate, password, ...userData } = req.body

      // 1. Primero hashear el password
      const hashedPassword = await bcrypt.hash(password, 10)

      // 2. Crear usuario en db1 (incluyendo el password hasheado)
      const user = await db1.users.create({
        data: {
          ...userData,
          documentTypeId: parseInt(userData.documentTypeId),
          age: parseInt(userData.age),
          password: hashedPassword  // Incluimos el password hasheado en db1
        },
        include: {
          documentType: true
        }
      })

      // 3. Crear entrada en db2 (solo email y password hasheado)
      await db2.loginUsers.create({
        data: {
          email: userData.email,
          password: hashedPassword  // Usamos el mismo hash para ambas bases
        }
      })

      console.log('✅ Usuario creado en ambas bases de datos')
      res.status(201).json(user)

    } catch (error) {
      console.error('Error al crear usuario:', error)
      if (error.code === 'P2002') {
        res.status(400).json({ 
          message: 'El email o documento ya existe',
          error: error.message 
        })
      } else {
        res.status(500).json({ 
          message: 'Error al crear usuario',
          error: error.message 
        })
      }
    }
  }

  async update(req, res) {
    try {
      const { documentId } = req.params
      const updateData = req.body

      // 1. Primero obtener el usuario actual de db1 para tener el email actual
      const currentUser = await db1.users.findUnique({
        where: { documentId }
      })

      if (!currentUser) {
        return res.status(404).json({ 
          message: 'Usuario no encontrado' 
        })
      }

      // 2. Actualizar usuario en db1
      const updatedUser = await db1.users.update({
        where: { documentId },
        data: updateData,
        include: {
          documentType: true
        }
      })

      // 3. Si el email está siendo actualizado, actualizarlo también en db2
      if (updateData.email && updateData.email !== currentUser.email) {
        try {
          // Buscar el usuario en db2 por el email anterior
          const loginUser = await db2.loginUsers.findUnique({
            where: { email: currentUser.email }
          })

          if (loginUser) {
            // Actualizar email en db2
            await db2.loginUsers.update({
              where: { email: currentUser.email },
              data: { email: updateData.email }
            })
            console.log('✅ Email actualizado en db2:', updateData.email)
          } else {
            console.log('⚠️ Usuario no encontrado en db2')
          }
        } catch (error) {
          console.error('Error al actualizar email en db2:', error)
          // No detenemos la operación si falla la actualización en db2
        }
      }

      res.json(updatedUser)

    } catch (error) {
      console.error('Error en actualización:', error)
      res.status(500).json({ 
        message: 'Error al actualizar usuario',
        error: error.message 
      })
    }
  }

  async delete(req, res) {
    try {
      const { documentId } = req.params

      // Primero obtener el email del usuario de db1
      const user = await db1.users.findUnique({
        where: { documentId }
      })

      if (!user) {
        return res.status(404).json({ 
          message: 'Usuario no encontrado en db1' 
        })
      }

      console.log('🔍 Usuario encontrado en db1:', user.email)

      // Eliminar de db1
      await db1.users.delete({
        where: { documentId }
      })

      // Eliminar de db2 usando el email
      try {
        const deletedLoginUser = await db2.loginUsers.delete({
          where: { email: user.email }
        })
        console.log('✅ Usuario eliminado de db2:', deletedLoginUser.email)
      } catch (error) {
        console.log('⚠️ No se encontró usuario en db2 o ya fue eliminado:', error.message)
      }

      res.json({ 
        message: 'Usuario eliminado de ambas bases de datos',
        email: user.email 
      })

    } catch (error) {
      console.error('❌ Error al eliminar usuario:', error)
      res.status(500).json({ 
        message: 'Error al eliminar usuario',
        error: error.message 
      })
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