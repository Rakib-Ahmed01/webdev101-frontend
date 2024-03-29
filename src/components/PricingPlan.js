const PricingPlan = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Pricing Plan
            </h1>

            <div className="mx-auto">
              <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
            magni libero consequuntur voluptatum velit amet id repudiandae ea,
            deleniti laborum in neque eveniet.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-8 space-y-8 text-center border border-blue-200 rounded-lg dark:border-gray-700">
              <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
                Free
              </p>

              <h2 className="text-5xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $0
              </h2>

              <p className="font-medium text-gray-500 dark:text-gray-300">
                Life time
              </p>

              <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Start Now
              </button>
            </div>

            <div className="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg">
              <p className="font-medium text-gray-200 uppercase">
                Moderate Learner
              </p>

              <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
                $10
              </h2>

              <p className="font-medium text-gray-200">Per month</p>

              <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                Start Now
              </button>
            </div>

            <div className="w-full p-8 space-y-8 text-center border border-blue-200 rounded-lg dark:border-gray-700">
              <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
                Active Learner
              </p>

              <h2 className="text-5xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $100
              </h2>

              <p className="font-medium text-gray-500 dark:text-gray-300">
                Life time
              </p>

              <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
