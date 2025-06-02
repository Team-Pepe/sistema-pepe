import { Navigate } from 'react-router-dom';
import { useAuth } from '../../routes';

function PublicRoute({ children }) {
  const { auth } = useAuth();

  // Si el usuario está autenticado, redirigir al dashboard
  if (auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PublicRoute;