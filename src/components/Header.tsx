import RecyclingIcon from '@mui/icons-material/Recycling';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { theme } from '../theme';
import { trackClarityEvent } from '../utils/ClarityUtil';

export default function Header() {
  const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

  const handleBaseClick = () => {
    trackClarityEvent('click', { target: 'title' });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <RecyclingIcon className="me-2" htmlColor={theme.palette.warning.light} />
        <Typography
          variant="h6"
          component="a"
          href={`${base}/`}
          className="text-decoration-none text-white"
          onClick={handleBaseClick}
        >
          Lisbon Recycling
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
