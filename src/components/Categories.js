import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
  return (
    <nav>
      {categories.map((category) => {
        return (
          <NavLink
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
            to={`/courses/${category.id}`}
            key={category.id}
          >
            <span className="mx-4 font-medium">{category.name}</span>
          </NavLink>
        );
      })}
      <NavLink
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
        to={`/all-courses`}
      >
        <span className="mx-4 font-medium">All Courses</span>
      </NavLink>
    </nav>
  );
};

export default Categories;
