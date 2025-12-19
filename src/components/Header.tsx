import GitHubIcon from '@mui/icons-material/GitHub';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { theme } from '../theme';
import { trackClarityEvent } from '../utils/ClarityUtil';

export default function Header() {
  const baseUrl = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

  const handleBaseClick = () => {
    trackClarityEvent('click', { target: 'title' });
  };

  const handleGitHubClick = () => {
    trackClarityEvent('click', { target: 'GitHub' });
    window.location.href = import.meta.env.VITE_GITHUB_REPO_URL;
  };

  return (
    <AppBar position="static">
      <Toolbar className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <RecyclingIcon className="me-2" htmlColor={theme.palette.warning.light} />
          <Typography
            variant="h6"
            component="a"
            href={`${baseUrl}/`}
            className="text-decoration-none text-white"
            onClick={handleBaseClick}
          >
            Lisbon Recycling
          </Typography>
        </div>
        <IconButton
          aria-label="Source Code"
          color="default"
          className="justify-self-end opacity-50"
          onClick={handleGitHubClick}
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
