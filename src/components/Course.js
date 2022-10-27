import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Course({ course }) {
  const {
    image,
    title,
    id,
    Author,
    ratings,
    students,
    price,
    isPopular,
    category_id,
  } = course;
  return (
    <Link
      to={`../courses/${category_id}/${id}`}
      className="course h-full border rounded cursor-pointer"
      title="Learn more about this course"
    >
      <div>
        <img src={image} alt={title} className="w-full" />
      </div>
      <div className=" p-2 relative">
        <h2 className="text-lg text-gray-800 font-medium mb-1">{title}</h2>
        <h3 className="text-blue-400 font-medium">{Author}</h3>
        <h4 className="flex items-center gap-[2px]">
          <span>
            <AiFillStar className="text-blue-500" />
          </span>
          {`${ratings}(${students})`}
        </h4>
        <h5 className="text-[17px] font-bold">${price?.replace('$', '')}</h5>
        {isPopular && (
          <span className="text-white bg-blue-500 px-4 rounded-sm font-medium py-1 inline-block">
            Bestseller
          </span>
        )}
      </div>
    </Link>
  );
}
