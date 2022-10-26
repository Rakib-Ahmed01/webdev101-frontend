import Banner from '../Banner';
import Features from '../Features';
import TopInstructor from '../Instructors';
import PricingPlan from '../PricingPlan';
import RegisterNow from '../RegisterNow';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import Testimonial from '../Testimonial';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <RegisterNow />
      <PricingPlan />
      <TopInstructor />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
