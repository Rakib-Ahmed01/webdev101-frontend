import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import router from './routes/routes';

function App() {
  return (
    <>
      <UserContext>
        <RouterProvider router={router} />
        <Toaster />
      </UserContext>
    </>
  );
}

export default App;
