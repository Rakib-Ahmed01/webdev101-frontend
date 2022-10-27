import { toast } from 'react-hot-toast';
import { AiFillStar } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const [course] = useLoaderData();
  const {
    image,
    title,
    id,
    desc,
    Author,
    ratings,
    students,
    price,
    isPopular,
  } = course;

  const buyCourse = () => {
    toast.success('Course is added to your account');
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center">
        <h2 className="text-center -mb-2 text-4xl font-bold">Checkout</h2>
        <div className=" mx-auto mb-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <div className="course-details h-full border rounded-sm mx-auto max-w-2xl ">
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-[350px] object-contain"
          />
        </div>
        <div className=" p-2 relative">
          <h2 className="text-xl text-gray-800 font-medium mb-1">{title}</h2>
          <h2 className="text-lg text-gray-800 mb-1">{desc}</h2>
          <h3>
            Created by{' '}
            <span className="text-blue-400 cursor-pointer underline text-lg font-medium">
              {' '}
              {Author}
            </span>
          </h3>
          <h4 className="flex items-center gap-[2px]">
            <span>
              <AiFillStar className="text-blue-500" />
            </span>
            {`${ratings}(${students})`}
          </h4>
          <h5 className="text-[17px] font-bold">${price.replace('$', '')}</h5>
          {isPopular && (
            <span className="text-white bg-blue-500 px-4 rounded-sm font-medium py-1 inline-block">
              Bestseller
            </span>
          )}
          <div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center text-lg font-semibold -mb-2 mt-2">
                What you will learn
              </h3>
              <div className="mx-auto">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>
            <ul>
              {points.map((point) => {
                return (
                  <li key={point} className="flex items-center gap-2">
                    <MdDone className="basis-[15px]" /> {point}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <button className="btn block mx-auto my-3" onClick={buyCourse}>
        Buy This Course
      </button>
    </div>
  );
};

const points = [
  'Work with one of the most in-demand web development programming languages',
  'Build modern, fast and scalable server-side web applications with modern technology',
  'Learn the basics as well as advanced concepts of these technologies',
  'Build a lots of projects',
];

export default Checkout;
