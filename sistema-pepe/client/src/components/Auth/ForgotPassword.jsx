import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword({ onLoginClick }) {
  const [email, setEmail] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Password recovery attempt with:', { email })
    // Aquí iría la lógica de recuperación de contraseña cuando implementes el backend
    setIsSent(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-600 p-4 animate-gradient">
      <div className="w-full max-w-md">
        {/* Tarjeta de recuperación con efecto de vidrio */}
        <div className="relative bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-white/20 transform transition-all duration-700 hover:scale-105">
          {/* Contenedor del icono */}
          <div className="flex justify-center -mb-10 pt-8 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <div className="w-20 h-20 bg-indigo-900 rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg z-10 transition-all duration-500 hover:bg-indigo-800 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </div>
          
          {/* Título */}
          <div className="text-center pt-12 pb-4 animate-slide-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
            <h2 className="text-2xl font-bold text-white">Recuperar Contraseña</h2>
            <p className="text-white/80 text-sm mt-2">Te enviaremos un enlace para restablecer tu contraseña</p>
          </div>
          
          {!isSent ? (
            /* Formulario */
            <form onSubmit={handleSubmit} className="p-10 pt-4 space-y-6">
              {/* Campo de Email */}
              <div className="relative animate-slide-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white
                             focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                             transition-all duration-500 focus:bg-indigo-900/70 hover:bg-indigo-900/60
                             placeholder:transition-colors placeholder:duration-300"
                  placeholder="Correo electrónico"
                  required
                />
              </div>
              
              {/* Enlaces de navegación */}
              <div className="text-center text-sm animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
                <span className="text-white">¿Recordaste tu contraseña? </span>
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
              
              {/* Botón de Enviar */}
              <div className="animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-500 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  ENVIAR ENLACE
                </button>
              </div>
            </form>
          ) : (
            /* Mensaje de confirmación */
            <div className="p-10 pt-4 space-y-6">
              <div className="text-center animate-slide-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500/80 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">¡Correo enviado!</h3>
                <p className="text-white/80 mb-6">Hemos enviado un enlace de recuperación a tu correo electrónico. Por favor revisa tu bandeja de entrada.</p>
                
                <button
                  onClick={onLoginClick}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-500 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  VOLVER AL INICIO
                </button>
              </div>
              
              // Cambiar el enlace de vuelta al login
              // Busca donde está el enlace "Volver al login" y reemplázalo con:
              <Link 
                to="/login"
                className="text-white hover:text-indigo-200 transition-all duration-300 hover:underline"
              >
                Volver al login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword