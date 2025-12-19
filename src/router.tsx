import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import RequireStreetGuard from './components/RequireStreetGuard';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import StreetPage from './pages/StreetPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <RequireStreetGuard>
            <MainPage />
          </RequireStreetGuard>
        )
      },
      {
        path: 'street',
        element: <StreetPage />
      },
      {
        // legacy path for choosing a street - redirects to /street
        path: 'choose-street',
        element: <Navigate to="/street" replace />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
