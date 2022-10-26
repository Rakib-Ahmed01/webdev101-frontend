import Features from '../Features';
import TopInstructor from '../Instructors';
import PricingPlan from '../PricingPlan';
import RegisterNow from '../RegisterNow';
import Testimonial from '../Testimonial';

const Home = () => {
  return (
    <>
      <Features />
      <RegisterNow />
      <PricingPlan />
      <TopInstructor />
      <Testimonial />
    </>
  );
};

export default Home;
