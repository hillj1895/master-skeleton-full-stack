import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {path: '', element: <HomePage /> },
      {path: 'about', element: <HomePage />,  },

    ],
  },
]);


export function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App;


// Check out this link once we want to protect routes: https://github.com/remix-run/react-router/issues/10637#issuecomment-1802180978