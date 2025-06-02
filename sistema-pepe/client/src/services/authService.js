const API_URL = 'http://localhost:5000/api'

export const register = async (userData) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Error en el registro')
    }

    return data
  } catch (error) {
    console.error('Error en la solicitud:', error)
    throw error
  }
}

export const requestPasswordReset = async (email) => {
  const response = await fetch(`${API_URL}/auth/request-reset`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  return response.json()
}

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await fetch(`${API_URL}/auth/reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, newPassword })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al restablecer contraseña');
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}