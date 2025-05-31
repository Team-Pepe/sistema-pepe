const API_URL = 'http://localhost:5000/api'

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message)
    }

    // Guardar el token en localStorage
    if (data.data.token) {
      localStorage.setItem('token', data.data.token)
    }

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}