import { Link, Typography } from '@mui/material';
import { trackClarityEvent } from '../utils/ClarityUtil';

export default function Footer() {
  const handleNameClick = () => {
    trackClarityEvent('click', { target: 'Christopher Snay' });
  };

  return (
    <footer className="text-center p-4">
      <Typography variant="body2" align="center" color="textDisabled">
        &copy; {new Date().getFullYear()} Lisbon Recycling | Built by{' '}
        <Link href={import.meta.env.VITE_CS_WEBSITE_URL} onClick={handleNameClick}>
          Christopher Snay
        </Link>
      </Typography>
    </footer>
  );
}
