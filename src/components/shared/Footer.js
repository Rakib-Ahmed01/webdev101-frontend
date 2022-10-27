import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container py-8 mx-auto">
          <hr className="my-10 border-gray-200 dark:border-gray-700" />
          <div className="text-center">
            <a
              href="/"
              className="text-2xl font-bold text-blue-500 dark:text-white  dark:hover:text-gray-300 border-b-2 border-blue-500"
            >
              WebDev101
            </a>

            <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex flex-col mt-1 sm:flex-row sm:items-center sm:justify-center">
              <NavLink className="my-2 outline-btn sm:mx-4" to="/login">
                Login
              </NavLink>

              <Link className="btn" to="/register">
                Register
              </Link>
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-400">
              © Copyright 2022. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <Link
                href="/all-courses"
                className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {' '}
                Courses{' '}
              </Link>

              <Link
                href="/blog"
                className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {' '}
                Blog{' '}
              </Link>

              <Link
                href="/faq"
                className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {' '}
                FAQ{' '}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
