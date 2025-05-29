import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ForgotPassword from '../components/Auth/ForgotPassword';
import Dashboard from '../components/Dashboard/Dashboard';
import UserManager from '../components/Users/UserManager';
import { createContext, useState, useContext, useEffect } from 'react';
import ProtectedRoute from '../components/Auth/ProtectedRoute';

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
    setAuth({
      isAuthenticated: false,
      user: null
    });
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
    element: <Navigate to="/login" replace />
  },
  // Rutas públicas (accesibles sin autenticación)
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  // Rutas protegidas (requieren autenticación)
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/users',
    element: (
      <ProtectedRoute>
        <UserManager />
      </ProtectedRoute>
    )
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />
  }
]);

export default router;