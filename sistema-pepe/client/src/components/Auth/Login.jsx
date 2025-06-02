import { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../routes'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')  // Añadimos estado para manejar errores
  const [loading, setLoading] = useState(false)  // Añadimos estado para manejar carga
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  // Obtener la ruta a la que el usuario intentaba acceder (si existe)
  const from = location.state?.from?.pathname || '/dashboard'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión')
      }
      
      localStorage.setItem('token', data.data.token)
      login(data.data.user)
      
      // Redirigir siempre al dashboard (ruta raíz)
      navigate('/', { replace: true })
    } catch (error) {
      console.error('Error de login:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-600 p-4 animate-gradient">
      <div className="w-full max-w-md">
        {/* Tarjeta de login con efecto de vidrio */}
        <div className="relative bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-white/20 transform transition-all duration-700 hover:scale-105">
          {/* Contenedor del icono de usuario */}
          <div className="flex justify-center -mb-10 pt-8 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <div className="w-20 h-20 bg-indigo-900 rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg z-10 transition-all duration-500 hover:bg-indigo-800 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="p-10 pt-16 space-y-6">
            {/* Mostrar mensaje de error si existe */}
            {error && (
              <div className="bg-red-500/30 text-white p-3 rounded-md text-sm animate-slide-up">
                {error}
              </div>
            )}
            
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
                disabled={loading}
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
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-indigo-900/50 border border-white/20 rounded-md text-white
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                           transition-all duration-500 focus:bg-indigo-900/70 hover:bg-indigo-900/60
                           placeholder:transition-colors placeholder:duration-300"
                placeholder="Contraseña"
                required
                disabled={loading}
              />
              {/* Icono de ojo para mostrar/ocultar contraseña */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white hover:text-indigo-200 focus:outline-none transition-all duration-300 bg-transparent border-0 p-0"
                disabled={loading}
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
            
            {/* Enlaces de navegación */}
            <div className="flex justify-between items-center text-sm animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
              <div className="flex items-center">
                <span className="text-white">¿No tienes cuenta? </span>
                <Link 
                  to="/register"
                  className="text-white hover:text-indigo-200 transition-all duration-300 hover:underline font-semibold ml-1"
                >
                  Regístrate
                </Link>
              </div>
              <Link 
                to="/forgot-password"
                className="text-white hover:text-indigo-200 transition-all duration-300 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            
            {/* Botón de Login */}
            <div className="animate-slide-up" style={{animationDelay: '1s', animationFillMode: 'both'}}>
              <button
                type="submit"
                className={`w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-500 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 hover:shadow-xl active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'INICIANDO SESIÓN...' : 'INICIAR SESIÓN'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login