import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { db1, db2 } from '../lib/prisma.js'
import { sendResetPasswordEmail } from '../services/emailService.js'

export class PasswordResetController {
  async requestReset(req, res) {
    try {
      const { email } = req.body

      // Verificar si el usuario existe
      const user = await db2.loginUsers.findUnique({
        where: { email }
      })

      if (!user) {
        // Siempre devolver éxito para no revelar si el email existe
        return res.json({ 
          success: true, 
          message: 'Si el email existe, recibirás un enlace de recuperación.' 
        })
      }

      // Generar token
      const resetToken = jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )

      // Enviar email con el token
      await sendResetPasswordEmail(email, resetToken)

      res.json({
        success: true,
        message: 'Si el email existe, recibirás un enlace de recuperación.'
      })

    } catch (error) {
      console.error('Error en recuperación de contraseña:', error)
      res.status(500).json({
        success: false,
        message: 'Error al procesar la solicitud'
      })
    }
  }

  async resetPassword(req, res) {
    try {
      const { token, newPassword } = req.body

      // Verificar token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      
      // Hash de la nueva contraseña
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      
      // Actualizar en db2 (login_users)
      await db2.loginUsers.update({
        where: { email: decoded.email },
        data: { password: hashedPassword }
      })

      // Actualizar en db1 (users)
      await db1.users.update({
        where: { email: decoded.email },
        data: { password: hashedPassword }
      })

      res.json({
        success: true,
        message: 'Contraseña actualizada correctamente'
      })

    } catch (error) {
      console.error('Error al restablecer contraseña:', error)
      res.status(400).json({
        success: false,
        message: error.name === 'JsonWebTokenError' ? 'Token inválido o expirado' : 'Error al restablecer la contraseña'
      })
    }
  }
}