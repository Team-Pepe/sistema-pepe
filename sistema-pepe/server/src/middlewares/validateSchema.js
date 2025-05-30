export const validateRegisterSchema = (req, res, next) => {
  const { name, documentTypeId, documentId, email, password, phone, address, age } = req.body

  if (!name || !documentTypeId || !documentId || !email || !password || !phone || !address || !age) {
    return res.status(400).json({
      success: false,
      message: 'Todos los campos son requeridos'
    })
  }

  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Email inválido'
    })
  }

  // Validación de contraseña (mínimo 6 caracteres)
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'La contraseña debe tener al menos 6 caracteres'
    })
  }

  next()
}