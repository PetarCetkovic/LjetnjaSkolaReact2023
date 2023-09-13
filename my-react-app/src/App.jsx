import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { AppLayout } from './layout';
import { UsersPage } from './pages/users';
import { LoginPage } from './pages/login';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          exact: true,
        },
        {
          path: 'about',
          children: [
            {
              index: true,
              element: <AboutPage />,
              exact: true,
            },
            { path: 'team', element: <h1>Team page</h1> },
          ],
        },
        { path: 'login', element: <LoginPage /> },
        { path: 'users/:id', element: <UsersPage /> },
        { path: '*', element: <h1>404 Not found</h1> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
