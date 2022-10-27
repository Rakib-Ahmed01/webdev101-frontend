import { Link } from 'react-router-dom';
import learning from '../assets/images/learning.svg';

const Banner = () => {
  return (
    <div>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                Best Place To Build Up Your{' '}
                <span className="font-bold text-blue-500">
                  Web Development{' '}
                </span>
                Career
              </h1>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Find the right instructor for you. Choose from many topics,
                skill levels, and languages. Shop thousands of high-quality
                on-demand online courses. Start learning today. Lifetime Access.
                Courses in 1+ Languages. Expert Instructors. Over 24+ Courses.
              </p>

              <Link to="/register" className="btn mt-6 inline-block">
                Register Now
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-2xl"
              src={learning}
              alt="Online Learning"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
