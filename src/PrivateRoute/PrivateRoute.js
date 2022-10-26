import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

export default function PrivateRoute() {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(location.pathname);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {user ? (
        <Outlet />
      ) : (
        <Navigate to="../login" state={{ from: location?.pathname }} replace />
      )}
    </div>
  );
}
