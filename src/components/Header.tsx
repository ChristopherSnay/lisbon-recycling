import RecyclingIcon from '@mui/icons-material/Recycling';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { theme } from '../theme';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <RecyclingIcon className="me-2" htmlColor={theme.palette.warning.light} />
        <Typography
          variant="h6"
          component="a"
          href="/"
          className="text-decoration-none text-white"
        >
          Lisbon Recycling
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
