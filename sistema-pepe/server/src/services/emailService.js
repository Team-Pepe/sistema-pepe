import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

export const sendResetPasswordEmail = async (email, resetToken) => {
  // Cambiar BASE_URL por CLIENT_URL y agregar la ruta correcta
  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`
  
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Recuperación de Contraseña',
    html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: #4F46E5; text-align: center;">Recuperación de Contraseña</h2>
        <p style="color: #374151; line-height: 1.5;">Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para continuar:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" 
             style="display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Restablecer Contraseña
          </a>
        </div>
        <p style="color: #6B7280; font-size: 14px; text-align: center; margin-top: 20px;">
          Este enlace expirará en 1 hora por seguridad.<br>
          Si no solicitaste este cambio, puedes ignorar este correo.
        </p>
      </div>
    `
  }

  await transporter.sendMail(mailOptions)
}