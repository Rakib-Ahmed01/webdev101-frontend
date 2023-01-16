import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { AuthContext } from '../contexts/UserContext';

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <BounceLoader color="#3b82f6" />
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to="../login" state={{ from: location?.pathname }} replace />
    );
  }

  return children;
}
