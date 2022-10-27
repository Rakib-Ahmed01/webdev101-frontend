export default function FAQ() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container max-w-4xl px-6 py-10 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mx-auto">
            <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        <div class="mt-12 space-y-8">
          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 dark:text-white">
                How i can play for my appoinment ?
              </h1>

              <span class="text-gray-400 bg-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 12H6"
                  />
                </svg>
              </span>
            </button>

            <hr class="border-gray-200 dark:border-gray-700" />

            <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
              laboriosam recusandae facere dolorum veniam quia pariatur
              obcaecati illo ducimus?
            </p>
          </div>

          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 dark:text-white">
                Is the cost of the appoinment covered by private health
                insurance?
              </h1>

              <span class="text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 dark:text-white">
                Do i need a referral?
              </h1>

              <span class="text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 dark:text-white">
                What are your opening house?
              </h1>

              <span class="text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 dark:text-white">
                What can i expect at my first consultation?
              </h1>

              <span class="text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
