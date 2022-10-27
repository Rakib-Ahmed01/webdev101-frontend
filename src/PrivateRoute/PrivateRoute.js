import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(user);
  console.log(location);

  if (!user) {
    console.log('if');
    return (
      <Navigate to="../login" state={{ from: location?.pathname }} replace />
    );
  }

  console.log('Got here');

  return children;
}
