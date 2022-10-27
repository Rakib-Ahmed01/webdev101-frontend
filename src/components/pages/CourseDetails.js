import { createRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';

const ref = createRef();

const CourseDetails = () => {
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
  return (
    <>
      <div className="" ref={ref}>
        <div className="flex items-center justify-between mx-auto max-w-2xl mb-2 gap-5 ">
          <h2 className="text-center text-2xl font-semibold max-w-2xl">
            {title}
          </h2>
          <Pdf targetRef={ref} filename={`${title}.pdf`}>
            {({ toPdf }) => (
              <BsDownload
                className="text-2xl font-semibold basis-[50px] md:-mr-2"
                title="Download course details"
                onClick={toPdf}
              />
            )}
          </Pdf>
        </div>
        <div className="course-details h-full border rounded-sm mx-auto max-w-2xl ">
          <div>
            <img src={image} alt={title} className="w-full" />
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
        <Link to={`/checkout/${id}`}>
          <button className="btn block mx-auto my-3">Get Premium Access</button>
        </Link>
      </div>
    </>
  );
};

const points = [
  'Work with one of the most in-demand web development programming languages',
  'Build modern, fast and scalable server-side web applications with modern technology',
  'Learn the basics as well as advanced concepts of these technologies',
  'Build a lots of projects',
];

export default CourseDetails;
