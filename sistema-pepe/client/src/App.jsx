import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'

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
