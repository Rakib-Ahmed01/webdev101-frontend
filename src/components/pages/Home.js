import { useContext } from 'react';
import { HashLoader } from 'react-spinners';
import { AuthContext } from '../../contexts/UserContext';
import Banner from '../Banner';
import Features from '../Features';
import TopInstructor from '../Instructors';
import Popularcourses from '../Popularcourses';
import PricingPlan from '../PricingPlan';
import RegisterNow from '../RegisterNow';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import Testimonial from '../Testimonial';

const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen justify-center items-center w-full">
        <HashLoader color="#3b82f6" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Popularcourses />
      <RegisterNow />
      <PricingPlan />
      <TopInstructor />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
