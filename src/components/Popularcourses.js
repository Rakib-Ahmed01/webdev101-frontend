import { useEffect, useState } from 'react';
import Course from './Course';

const Popularcourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://webdev101-server.vercel.app/popular-courses')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => alert(err));
  }, []);

  console.log(courses);
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Our Popular Courses
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr courses gap-5 mt-6 xl:mt-12 xl:gap-8">
            {courses.map((course) => {
              return <Course key={course.id} course={course}></Course>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularcourses;
