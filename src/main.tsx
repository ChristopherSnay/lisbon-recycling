import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SavedStreetProvider } from './context/StreetContext.tsx';
import './index.scss';
import { router } from './router.tsx';
import { theme } from './theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SavedStreetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <RouterProvider router={router} />
      </ThemeProvider>
    </SavedStreetProvider>
  </StrictMode>
);
