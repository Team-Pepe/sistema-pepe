const API_URL = 'http://localhost:5000/api/users'

export const userService = {
  // Obtener todos los usuarios
  getAll: async () => {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Error al obtener usuarios')
    return response.json()
  },

  // Crear usuario
  create: async (userData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Error al crear usuario')
    }
    
    return response.json()
  },

  // Actualizar usuario
  update: async (documentId, userData) => {
    const response = await fetch(`${API_URL}/${documentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Error al actualizar usuario')
    }
    
    return response.json()
  },

  // Eliminar usuario
  delete: async (documentId) => {
    const response = await fetch(`${API_URL}/${documentId}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('Error al eliminar usuario')
    return response.json()
  },

  // Obtener tipos de documento
  getDocumentTypes: async () => {
    const response = await fetch(`${API_URL}/document-types`)
    if (!response.ok) throw new Error('Error al obtener tipos de documento')
    return response.json()
  }
}