import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Footer = () => {
  const { user } = useContext(AuthContext);
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

            {!user && (
              <>
                <div className="flex flex-col md:hidden px-2">
                  <Link className="outline-btn block -mb-2" to="/login">
                    Login
                  </Link>
                  <div className="flex items-center justify-between mt-4">
                    <span className="w-2/5 border-b dark:border-gray-600 lg:w-2/5"></span>

                    <p>Or</p>

                    <span className="w-2/5 border-b dark:border-gray-400 lg:w-2/5"></span>
                  </div>
                  <Link className="btn block mt-1" to="/register">
                    Register
                  </Link>
                </div>

                <div className="hidden md:flex flex-col mt-1 sm:flex-row sm:items-center sm:justify-center">
                  <NavLink className="my-2 outline-btn sm:mx-4" to="/login">
                    Login
                  </NavLink>

                  <Link className="btn" to="/register">
                    Register
                  </Link>
                </div>
              </>
            )}
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
