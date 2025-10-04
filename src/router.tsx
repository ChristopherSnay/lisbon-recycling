import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import RequireStreetGuard from './components/RequireStreetGuard';
import MainPage from './pages/MainPage';
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
      }
      // other routes...
    ]
  }
]);
