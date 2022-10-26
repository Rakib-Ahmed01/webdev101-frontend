import { createBrowserRouter } from 'react-router-dom';
import Courses from '../components/pages/Courses';
import Home from '../components/pages/Home';
import CoursesLayout from '../layouts/CoursesLayout';
import HomeLayout from '../layouts/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/courses',
        element: <CoursesLayout />,
        children: [
          {
            index: true,
            element: <Courses />,
          },
          {
            path: '/courses',
            element: <Courses />,
          },
        ],
      },
    ],
  },
]);

export default router;
