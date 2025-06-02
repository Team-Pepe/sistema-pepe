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
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Recuperación de Contraseña',
    html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Recuperación de Contraseña</h2>
        <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para continuar:</p>
        <a href="${process.env.BASE_URL}/reset-password/${resetToken}" 
           style="display: inline-block; padding: 10px 20px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">
          Restablecer Contraseña
        </a>
        <p>Este enlace expirará en 1 hora.</p>
        <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
      </div>
    `
  }

  await transporter.sendMail(mailOptions)
}