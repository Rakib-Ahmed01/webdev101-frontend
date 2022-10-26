import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import Sidebar from '../components/shared/Sidebar';

const CoursesLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex">
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesLayout;
