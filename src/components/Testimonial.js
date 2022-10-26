import { useState } from 'react';
import reviews from '../assets/data/student-reviews';

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    const newIndex = checkNumber(index + 1);
    setIndex(newIndex);
  };

  const decreaseIndex = () => {
    const newIndex = checkNumber(index + 1);
    setIndex(newIndex);
  };

  const checkNumber = (number) => {
    if (number > reviews.length - 1 || number < 0) {
      return 0;
    } else {
      return number;
    }
  };

  const { name, comment, job, image } = reviews[index];
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
            What our students say{' '}
          </h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="flex items-start max-w-6xl mx-auto mt-16">
            <button
              className="animate-pulse hidden p-2 text-blue-600 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-blue-200"
              onClick={increaseIndex}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div>
              <p className="flex items-center text-[17px] text-center text-gray-500 lg:mx-8">
                {comment}
              </p>

              <div className="flex flex-col items-center justify-center mt-8">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src={image}
                  alt=""
                />

                <div className="mt-4 text-center">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {name}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {job}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="animate-pulse hidden p-2 text-blue-600 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-blue-200"
              onClick={decreaseIndex}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
