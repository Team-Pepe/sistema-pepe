import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../routes';

function ProtectedRoute({ children }) {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth.isAuthenticated) {
    // Redirigir al login si no está autenticado, guardando la ruta a la que intentaba acceder
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;