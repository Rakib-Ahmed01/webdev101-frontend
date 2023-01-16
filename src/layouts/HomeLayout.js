import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import { AuthContext } from '../contexts/UserContext';

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen justify-center items-center w-full">
        <BounceLoader color="#3b82f6" />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
