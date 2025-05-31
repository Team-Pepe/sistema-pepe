import { registerUser } from '../services/authService.js'

export const register = async (req, res) => {
  try {
    const { birthdate, ...userData } = req.body

    // Calcular edad
    const age = calculateAge(birthdate)
    
    // Registrar usuario
    const { user, token } = await registerUser({
      ...userData,
      age
    })

    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      data: {
        user,
        token
      }
    })

  } catch (error) {
    console.error('Error en registro:', error)
    res.status(error.message.includes('already exists') ? 409 : 500).json({
      success: false,
      message: error.message
    })
  }
}

// Función auxiliar para calcular edad
const calculateAge = (birthdate) => {
  const today = new Date()
  const birthdateObj = new Date(birthdate)
  let age = today.getFullYear() - birthdateObj.getFullYear()
  const monthDiff = today.getMonth() - birthdateObj.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
    age--
  }
  
  return age
}