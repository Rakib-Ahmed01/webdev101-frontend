import { createBrowserRouter } from 'react-router-dom';
import CourseDetails from '../components/pages/CourseDetails';
import Courses from '../components/pages/Courses';
import CoursesByCategory from '../components/pages/CoursesByCategory';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import SignUp from '../components/pages/Register';
import CoursesLayout from '../layouts/CoursesLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/all-courses',
    element: <CoursesLayout />,
    children: [
      {
        index: true,
        element: <Courses />,
        loader: () => fetch('https://webdev101-server.vercel.app/all-courses'),
      },
      {
        path: '/all-courses',
        element: <Courses />,
        loader: () => fetch('https://webdev101-server.vercel.app/all-courses'),
      },
    ],
  },
  {
    path: '/courses/:categoryId',
    element: <CoursesLayout />,
    children: [
      {
        index: true,
        element: <CoursesByCategory />,
        loader: ({ params }) =>
          fetch(
            `https://webdev101-server.vercel.app/courses/${params.categoryId}`
          ),
      },
      {
        path: '/courses/:categoryId/:id',
        element: <CourseDetails />,
        loader: ({ params }) => {
          return fetch(
            `https://webdev101-server.vercel.app/all-courses/${params.id}`
          );
        },
      },
    ],
  },
  {
    path: '/login',
    element: <CoursesLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/register',
    element: <CoursesLayout />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: '/register',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>Page Not Found!</h1>,
  },
]);

export default router;
