import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { AuthContext } from '../../contexts/UserContext';

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const changeTheme = (theme) => {
    if (theme) {
      toast.success('Light mode enabled');
    } else {
      toast.success('Dark mode enabled');
    }
  };

  return (
    <div className="header">
      <header className="bg-white dark:bg-gray-900">
        <nav className="relative bg-white dark:bg-gray-900">
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <img src={logo} className="w-10 h-10" alt="logo" />
                <NavLink
                  className="text-2xl font-bold  transition-colors duration-300 transform dark:text-white lg:text-3xl border-b-2 border-blue-500 hover:text-gray-700 dark:hover:text-gray-300 text-blue-500"
                  to="/"
                >
                  WebDev101
                </NavLink>
              </div>

              <div className="flex md:hidden">
                <button
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${!isOpen ? 'block' : 'hidden'} w-6 h-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`${
                isOpen
                  ? 'translate-x-0 opacity-100 '
                  : 'opacity-0 -translate-x-full'
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:justify-center md:items-center`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:mx-6">
                <NavLink
                  className="my-2 font-medium text-base text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-3 md:my-0"
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  className="my-2 font-medium text-base text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-3 md:my-0"
                  to="/all-courses"
                >
                  Courses
                </NavLink>
                <NavLink
                  className="my-2 font-medium text-base text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-3 md:my-0"
                  to="/faq"
                >
                  FAQ
                </NavLink>
                <NavLink
                  className="my-2 font-medium text-base text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-3 md:my-0"
                  to="/blog"
                >
                  Blog
                </NavLink>

                <div className="my-2 md:mx-3">
                  {dark ? (
                    <BsFillSunFill
                      title="Toogle Theme"
                      onClick={() => {
                        setDark(!dark);
                        changeTheme(dark);
                      }}
                    />
                  ) : (
                    <BsMoonStarsFill
                      title="Toogle Theme"
                      onClick={() => {
                        setDark(!dark);
                        changeTheme(dark);
                      }}
                    />
                  )}
                </div>

                {!user ? (
                  <>
                    {' '}
                    <Link className="my-2 outline-btn md:mx-3" to="/login">
                      Login
                    </Link>
                    <Link className="btn my-2 md:mx-3" to="/register">
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                      className="my-2 md:mx-3 block w-8 h-8 rounded-full"
                    />
                    <FiLogOut
                      className="my-2 md:mx-3"
                      title="logout"
                      onClick={logout}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
