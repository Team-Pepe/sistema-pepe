import { registerUser } from '../services/authService.js'

export const register = async (req, res) => {
  try {
    const { birthdate, ...userData } = req.body

    // Calculate age
    const age = calculateAge(birthdate)
    
    // Register user with calculated age
    const result = await registerUser({
      ...userData,
      age
    })

    res.status(201).json({
      success: true,
      data: result
    })

  } catch (error) {
    console.error('Error in register controller:', error)
    res.status(error.message === 'User already exists' ? 409 : 500).json({
      success: false,
      message: error.message
    })
  }
}

// Helper function to calculate age
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