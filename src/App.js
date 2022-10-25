import Features from './components/Features';
import TopInstructor from './components/Instructors';
import PricingPlan from './components/PricingPlan';
import RegisterNow from './components/RegisterNow';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Features />
      <RegisterNow />
      <PricingPlan />
      <TopInstructor />
    </div>
  );
}

export default App;
