import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/pages/Blog';
import Checkout from '../components/pages/Checkout';
import CourseDetails from '../components/pages/CourseDetails';
import Courses from '../components/pages/Courses';
import CoursesByCategory from '../components/pages/CoursesByCategory';
import Error from '../components/pages/Error';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import SignUp from '../components/pages/Register';
import CoursesLayout from '../layouts/CoursesLayout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
    errorElement: <Error />,
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
    errorElement: <Error />,
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
    errorElement: <Error />,
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
    errorElement: <Error />,
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
    path: '/checkout/:id',
    element: <CoursesLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://webdev101-server.vercel.app/all-courses/${params.id}`
          );
        },
      },
    ],
  },
  {
    path: '/blog',
    element: <CoursesLayout />,
    children: [
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

export default router;
