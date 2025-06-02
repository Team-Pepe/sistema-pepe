import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ForgotPassword from '../components/Auth/ForgotPassword';
import ResetPassword from '../components/Auth/ResetPassword'; // Agregar esta importación
import Dashboard from '../components/Dashboard/Dashboard';
import UserManager from '../components/Users/UserManager';
import ProtectedRoute from '../components/Auth/ProtectedRoute';
import PublicRoute from '../components/Auth/PublicRoute';
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Intentar recuperar el estado de autenticación del localStorage al iniciar
  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth ? JSON.parse(savedAuth) : { isAuthenticated: false, user: null };
  });

  // Guardar el estado de autenticación en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const login = (userData) => {
    setAuth({
      isAuthenticated: true,
      user: userData
    });
  };

  const logout = () => {
    // Limpiar el estado de autenticación
    setAuth({
      isAuthenticated: false,
      user: null
    });
    
    // Limpiar el localStorage
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Definir las rutas públicas y protegidas
const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>
  },
  {
    path: '/login',
    element: <PublicRoute><Login /></PublicRoute>
  },
  {
    path: '/register',
    element: <PublicRoute><Register /></PublicRoute>
  },
  {
    path: '/forgot-password',
    element: <PublicRoute><ForgotPassword /></PublicRoute>
  },
  {
    path: '/reset-password/:token',
    element: <PublicRoute><ResetPassword /></PublicRoute>
  },
  {
    path: '/users',
    element: <ProtectedRoute><UserManager /></ProtectedRoute>
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
]);

export default router;