import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../routes'

function Dashboard() {
  const [userName, setUserName] = useState('Usuario')
  const navigate = useNavigate()
  const { logout } = useAuth()
  
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // Simulación de carga de datos del usuario
  // En producción, estos datos vendrían del backend
  useEffect(() => {
    // Simulamos un retraso en la carga de datos
    const timer = setTimeout(() => {
      setUserName('Usuario')
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-600 p-4 animate-gradient">
      {/* Contenedor principal */}
      <div className="container mx-auto py-8">
        {/* Botón de logout */}
        <div className="absolute top-4 right-4 animate-slide-up" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
          <button
            onClick={handleLogout}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-all duration-300 flex items-center space-x-2 border border-white/20 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Cerrar Sesión</span>
          </button>
        </div>

        {/* Tarjeta de bienvenida con efecto de vidrio */}
        <div className="relative bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-white/20 transform transition-all duration-700 hover:scale-[1.02] max-w-4xl mx-auto">
          {/* Icono de bienvenida */}
          <div className="flex justify-center -mb-10 pt-8 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <div className="w-20 h-20 bg-indigo-900 rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg z-10 transition-all duration-500 hover:bg-indigo-800 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          {/* Contenido del dashboard */}
          <div className="p-10 pt-16">
            {/* Título de bienvenida con animación */}
            <div className="text-center mb-8 animate-slide-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <h1 className="text-3xl font-bold text-white mb-2">¡Bienvenido, {userName}!</h1>
              <p className="text-white/80">Este es tu nuevo dashboard de Sistema Pepe</p>
            </div>
            
            {/* Tarjetas de información */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Tarjeta 1 */}
              <div className="bg-indigo-900/50 border border-white/20 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/70 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-white">Información del Sistema</h2>
                </div>
                <p className="text-white/80">Bienvenido al sistema de gestión. Aquí podrás administrar todos los aspectos de tu cuenta.</p>
              </div>
              
              {/* Tarjeta 2 */}
              <div className="bg-indigo-900/50 border border-white/20 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/70 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-white">Acciones Rápidas</h2>
                </div>
                <p className="text-white/80">Accede rápidamente a las funciones más utilizadas del sistema desde este panel.</p>
              </div>
            </div>
            
            {/* Botón de acción principal */}
            <div className="text-center animate-slide-up" style={{animationDelay: '1s', animationFillMode: 'both'}}>
              <button 
                onClick={() => navigate('/users')}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-500 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 hover:shadow-xl active:scale-95"
              >
                GESTOR DE USUARIOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard