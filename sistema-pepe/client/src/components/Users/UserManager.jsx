import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserFormModal from './UserFormModal'

function UserManager() {
  const [users, setUsers] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [documentTypes, setDocumentTypes] = useState([])

  // Datos de ejemplo (simula datos del backend)
  useEffect(() => {
    // Simular carga de usuarios
    const mockUsers = [
      { id: 1, name: 'Juan Pérez', email: 'juan@ejemplo.com', documentType: 'CC', documentId: '123456789', phone: '3001234567', address: 'Calle 123', age: 30 },
      { id: 2, name: 'María López', email: 'maria@ejemplo.com', documentType: 'CC', documentId: '987654321', phone: '3009876543', address: 'Carrera 456', age: 25 },
      // Agrega más usuarios de ejemplo según necesites
    ]
    setUsers(mockUsers)
  }, [])

  // Simular carga de tipos de documento (como en Register)
  useEffect(() => {
    setDocumentTypes([
      { id: 1, typeName: 'Cédula de Ciudadanía' },
      { id: 2, typeName: 'Tarjeta de Identidad' },
      { id: 3, typeName: 'Pasaporte' },
      { id: 4, typeName: 'Cédula de Extranjería' }
    ])
  }, [])

  const handleEdit = (user) => {
    setCurrentUser(user)
    setIsModalOpen(true)
  }

  const handleDelete = (userId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      setUsers(users.filter(user => user.id !== userId))
    }
  }

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData)
    // Aquí iría la lógica para enviar los datos al backend
    setIsModalOpen(false)
  }

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.documentId.includes(searchTerm)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-600 p-4 animate-gradient">
      <div className="container mx-auto py-8">
        {/* Tarjeta principal con efecto de vidrio */}
        <div className="relative bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-white/20">
          {/* Encabezado */}
          <div className="flex justify-between items-center p-6 border-b border-white/20">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-white hover:text-indigo-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="text-2xl font-bold text-white">Gestión de Usuarios</h1>
            </div>
            <button
              onClick={() => {
                setCurrentUser(null)
                setIsModalOpen(true)
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Nuevo Usuario</span>
            </button>
          </div>

          {/* Barra de búsqueda */}
          <div className="p-6 border-b border-white/20">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar usuarios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          {/* Tabla de usuarios */}
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/20">
                <thead className="bg-indigo-900/50"> {/* Fondo más oscuro para mejor contraste */}
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/20">
                      Nombre
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/20">
                      Documento
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/20">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/20">
                      Teléfono
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/20">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/20">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="text-white hover:bg-white/10 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.documentType} {user.documentId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                      {/* Modificar la sección de los botones de acciones */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(user)}
                            className="text-white/90 hover:text-blue-400 focus:outline-none transition-all duration-300 bg-transparent 
                                      border border-white/40 rounded-md p-1.5 hover:border-blue-400"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="text-white/90 hover:text-red-400 focus:outline-none transition-all duration-300 bg-transparent 
                                      border border-white/40 rounded-md p-1.5 hover:border-red-400"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <UserFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        currentUser={currentUser}
        documentTypes={documentTypes}
      />
    </div>
  )
}

export default UserManager