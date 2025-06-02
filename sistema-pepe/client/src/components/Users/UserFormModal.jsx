import { useState, useEffect, memo } from 'react'

function UserFormModal({ isOpen, onClose, onSubmit, currentUser, documentTypes }) {
  const [formData, setFormData] = useState({
    name: '',
    documentTypeId: '',
    documentId: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    birthdate: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  // Optimizamos el useEffect para que solo se ejecute cuando realmente cambie currentUser
  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name ?? '',
        documentTypeId: currentUser.documentTypeId ?? '',
        documentId: currentUser.documentId ?? '',
        email: currentUser.email ?? '',
        phone: currentUser.phone ?? '',
        address: currentUser.address ?? '',
        birthdate: currentUser.birthdate ?? '',
        password: ''
      })
    } else {
      setFormData({
        name: '',
        documentTypeId: '',
        documentId: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        birthdate: ''
      })
    }
  }, [currentUser])

  // Optimizamos el handleInputChange
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  // Clases base comunes para inputs
  const baseInputClasses = `
    w-full pl-10 pr-3 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white
    focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
    transition-all duration-300 focus:bg-indigo-900/70 hover:bg-indigo-900/60
  `

  // Clases base para contenedores de animación
  const baseAnimationClasses = "relative animate-slide-up"

  const calculateAge = (birthdate) => {
    if (!birthdate) return 0
    const today = new Date()
    const birthdateObj = new Date(birthdate)
    let age = today.getFullYear() - birthdateObj.getFullYear()
    const monthDiff = today.getMonth() - birthdateObj.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-fade-in border border-white/20">
        <div className="p-6">
          {/* Header simplificado */}
          <div className="flex justify-center items-center mb-4">
            <h3 className="text-xl font-bold text-white">
              {currentUser ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
            </h3>
          </div>

          <form onSubmit={(e) => {
  e.preventDefault()
  const dataToSubmit = {
    ...formData,
    documentTypeId: parseInt(formData.documentTypeId),
    age: calculateAge(formData.birthdate),
    password: formData.password // Asegúrate de incluir el password
  }
  // Eliminar birthdate antes de enviar
  delete dataToSubmit.birthdate
  onSubmit(dataToSubmit)
}} className="space-y-4">
            {/* Nombre completo con animación */}
            <div className={baseAnimationClasses}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={baseInputClasses}
                placeholder="Nombre completo"
                required
              />
            </div>

            {/* Tipo de Documento + Número con animación */}
            <div className="grid grid-cols-2 gap-4">
              <div className={baseAnimationClasses}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <select
                  name="documentTypeId"
                  value={formData.documentTypeId}
                  onChange={handleInputChange}
                  className={baseInputClasses}
                  required
                >
                  <option value="">Tipo documento</option>
                  {documentTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.typeName}</option>
                  ))}
                </select>
              </div>
              <div className={baseAnimationClasses}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h2m4 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m4 0h4" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="documentId"
                  value={formData.documentId}
                  onChange={handleInputChange}
                  className={baseInputClasses}
                  placeholder="Número de documento"
                  required
                />
              </div>
            </div>

            {/* Email + Teléfono con animación */}
            <div className="grid grid-cols-2 gap-4">
              <div className={baseAnimationClasses}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={baseInputClasses}
                  placeholder="Correo electrónico"
                  required
                />
              </div>
              <div className={baseAnimationClasses}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={baseInputClasses}
                  placeholder="Teléfono"
                  required
                />
              </div>
            </div>

            {/* Dirección + Fecha de nacimiento con animación */}
            <div className="grid grid-cols-2 gap-4">
              <div className={baseAnimationClasses}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={baseInputClasses}
                  placeholder="Dirección"
                  required
                />
              </div>
              <div className={baseAnimationClasses}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  max={new Date().toISOString().split('T')[0]} // Restringe hasta hoy
                  className={baseInputClasses}
                  placeholder="Fecha de nacimiento"
                  required
                />
              </div>
            </div>

            {/* Contraseña con animación (solo para nuevo usuario) */}
            {!currentUser && (
              <div className={baseAnimationClasses}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={baseInputClasses + " pr-10"}
                  placeholder="Contraseña"
                  required={!currentUser}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/70 hover:text-indigo-200 focus:outline-none transition-all duration-300 bg-transparent border-0 p-0"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            )}

            {/* Botones con animación */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md 
                         hover:from-indigo-600 hover:to-purple-700 transition-colors"
              >
                {currentUser ? 'Guardar Cambios' : 'Crear Usuario'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default memo(UserFormModal)