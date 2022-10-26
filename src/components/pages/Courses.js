import { useLoaderData } from 'react-router-dom';

export default function Courses() {
  const allCourses = useLoaderData();

  return (
    <div>
      {allCourses.map((course) => {
        return <div key={course.id}>Courses</div>;
      })}
    </div>
  );
}
