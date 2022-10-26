import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Categories from '../Categories';

const Sidebar = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch('https://webdev101-server.vercel.app/courses-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className=" sticky top-0">
      <div className="flex flex-col w-48 md:w-64 h-screen py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
        {false ? (
          <div className="flex flex-col px-2 gap-3">
            <NavLink className="outline-btn" to="/login">
              Login
            </NavLink>

            <NavLink className="btn " to="/register">
              Register
            </NavLink>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              John Doe
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
              john@example.com
            </p>
          </div>
        )}

        <div className="flex flex-col justify-between flex-1 mt-6">
          {categories ? (
            <Categories categories={categories} />
          ) : (
            <div className="text-center m-12">
              <HashLoader color="#3b82f6" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
