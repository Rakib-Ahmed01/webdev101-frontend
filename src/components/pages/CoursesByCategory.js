import { useLoaderData } from 'react-router-dom';
import Course from '../Course';

export default function CoursesByCategory() {
  const allCourses = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr courses">
      {allCourses.map((course) => {
        return <Course key={course.id} course={course}></Course>;
      })}
    </div>
  );
}
