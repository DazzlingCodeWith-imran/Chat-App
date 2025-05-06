import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'chat', element: <Chat /> },
      { path: 'admin', element: <AdminDashboard /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '*', element: <NotFound /> },
]);

export default router;