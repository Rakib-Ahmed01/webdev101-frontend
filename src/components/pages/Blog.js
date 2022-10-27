export default function Blog() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Blog
            </h1>

            <div className="mx-auto">
              <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          <div className="h-full rounded-md shadow">
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/STcItmMaQrusEPWsPf1o"
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white  dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                What is <code>cors</code>?
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                Cross-origin resource sharing (CORS) allows web developers to
                work around the same-origin policy. CORS adds HTTP headers which
                instruct web browsers on how to use and manage cross-domain
                content. The browser then allows or denies access to the content
                based on its security configuration.
              </p>

              <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
            </div>
          </div>

          <div className="h-full rounded-md shadow">
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/STcItmMaQrusEPWsPf1o"
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                Firebase offers numerous easy-to-use SDKs, efficient back-end
                services, and user interface libraries for authenticating the
                users on the application. Typically, it takes months to
                establish a functional authentication process, but with
                Firebase, the whole system can be set up in minutes and less
                than 15 lines of code.
              </p>

              <ul className="mt-3 text-sm text-gray-500 dark:text-gray-300  list-decimal">
                <li>Phone</li>
                <li>Google Play</li>
                <li>Apple</li>
                <li>Game Center</li>
                <li>etc.</li>
              </ul>

              <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
            </div>
          </div>
          <div className="h-full rounded-md shadow">
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/STcItmMaQrusEPWsPf1o"
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                How does the private route work?
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>

              <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
            </div>
          </div>
          <div className="h-full rounded-md shadow">
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/STcItmMaQrusEPWsPf1o"
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                What is Node? How does Node work?
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                Node is a JavaScript Runtime. Using Node we can run JavaScript
                code on server
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>

              <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
