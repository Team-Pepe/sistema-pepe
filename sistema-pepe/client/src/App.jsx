import { useState } from 'react'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ForgotPassword from './components/Auth/ForgotPassword'

function App() {
  const [currentPage, setCurrentPage] = useState('login')

  return (
    <>
      {currentPage === 'login' ? (
        <Login 
          onRegisterClick={() => setCurrentPage('register')} 
          onForgotPasswordClick={() => setCurrentPage('forgotPassword')} 
        />
      ) : currentPage === 'register' ? (
        <Register onLoginClick={() => setCurrentPage('login')} />
      ) : (
        <ForgotPassword onLoginClick={() => setCurrentPage('login')} />
      )}
    </>
  )
}

export default App
