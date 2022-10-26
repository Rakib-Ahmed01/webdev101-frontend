import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
