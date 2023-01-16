import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import Sidebar from '../components/shared/Sidebar';
import { AuthContext } from '../contexts/UserContext';

const CoursesLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <BounceLoader color="#3b82f6" />
      </div>
    );
  }
  return (
    <div className="relative">
      <Navbar />
      <div className="flex gap-3 pr-3">
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesLayout;
