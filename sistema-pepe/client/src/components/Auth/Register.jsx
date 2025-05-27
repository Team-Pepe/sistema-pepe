import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register({ onLoginClick }) {
  const [formData, setFormData] = useState({
    name: '',
    documentId: '', // Nuevo campo para el ID de documento
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    console.log('Register attempt with:', formData)
    // Aquí iría la lógica de registro cuando implementes el backend
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-600 p-4 animate-gradient">
      <div className="w-full max-w-md">
        {/* Tarjeta de registro con efecto de vidrio */}
        <div className="relative bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-white/20 transform transition-all duration-700 hover:scale-105">
          {/* Contenedor del icono de usuario */}
          <div className="flex justify-center -mb-10 pt-8 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <div className="w-20 h-20 bg-indigo-900 rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg z-10 transition-all duration-500 hover:bg-indigo-800 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>
          
          {/* Título */}
          <div className="text-center pt-12 pb-4 animate-slide-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
            <h2 className="text-2xl font-bold text-white">Crear Cuenta</h2>
            <p className="text-white/80 text-sm mt-2">Únete a nosotros</p>
          </div>
          
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="p-10 pt-4 space-y-5">
            {/* Campo de Nombre */}
            <div className="relative animate-slide-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                           transition-all duration-500 focus:bg-indigo-900/70 hover:bg-indigo-900/60
                           placeholder:transition-colors placeholder:duration-300"
                placeholder="Nombre completo"
                required
              />
            </div>
            
            {/* Campo de ID de Documento - NUEVO */}
            <div className="relative animate-slide-up" style={{animationDelay: '0.45s', animationFillMode: 'both'}}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <input
                id="documentId"
                name="documentId"
                type="text"
                value={formData.documentId}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                           transition-all duration-500 focus:bg-indigo-900/70 hover:bg-indigo-900/60
                           placeholder:transition-colors placeholder:duration-300"
                placeholder="Número de documento"
                required
              />
            </div>
            
            {/* Campo de Email */}
            <div className="relative animate-slide-up" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                           transition-all duration-500 focus:bg-indigo-900/70 hover:bg-indigo-900/60
                           placeholder:transition-colors placeholder:duration-300"
                placeholder="Correo electrónico"
                required
              />
            </div>
            
            {/* Campo de Contraseña */}
            <div className="relative animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-10 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                           transition-all duration-500 focus:bg-indigo-900/70 hover:bg-indigo-900/60
                           placeholder:transition-colors placeholder:duration-300"
                placeholder="Contraseña"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white hover:text-indigo-200 focus:outline-none transition-all duration-300 bg-transparent border-0 p-0"
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
            
            {/* Campo de Confirmar Contraseña */}
            <div className="relative animate-slide-up" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full pl-10 pr-10 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                           transition-all duration-500 focus:bg-indigo-900/70 hover:bg-indigo-900/60
                           placeholder:transition-colors placeholder:duration-300"
                placeholder="Confirmar contraseña"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white hover:text-indigo-200 focus:outline-none transition-all duration-300 bg-transparent border-0 p-0"
              >
                {showConfirmPassword ? (
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
            
            {/* Enlace a Login */}
            <div className="text-center text-sm animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
              <span className="text-white">¿Ya tienes cuenta? </span>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  onLoginClick()
                }}
                className="text-white hover:text-indigo-200 transition-all duration-300 hover:underline font-semibold ml-1"
              >
                Inicia sesión
              </a>
            </div>
            
            {/* Botón de Registro */}
            <div className="animate-slide-up" style={{animationDelay: '0.9s', animationFillMode: 'both'}}>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-500 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 hover:shadow-xl active:scale-95"
              >
                CREAR CUENTA
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Cambiar el enlace de vuelta al login
// Busca donde está el enlace "Volver al login" y reemplázalo con:
// <Link 
//   to="/login"
//   className="text-white hover:text-indigo-200 transition-all duration-300 hover:underline"
// >
//   Volver al login
// </Link>
// }

export default Register