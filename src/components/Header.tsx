import RecyclingIcon from '@mui/icons-material/Recycling';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <RecyclingIcon className="me-2" color="warning" />
        <Typography variant="h6">Lisbon Recycling</Typography>
      </Toolbar>
    </AppBar>
  );
}
