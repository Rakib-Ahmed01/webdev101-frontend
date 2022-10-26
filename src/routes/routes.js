import { createBrowserRouter } from 'react-router-dom';
import Courses from '../components/pages/Courses';
import Home from '../components/pages/Home';
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
    path: '/courses',
    element: <CoursesLayout />,
    children: [
      {
        index: true,
        element: <Courses />,
        loader: () => fetch('https://webdev101-server.vercel.app/all-courses'),
      },
      {
        path: '/courses',
        element: <Courses />,
        loader: () => fetch('https://webdev101-server.vercel.app/all-courses'),
      },
    ],
  },
  {
    path: '*',
    element: <h1>Page Not Found!</h1>,
  },
]);

export default router;
