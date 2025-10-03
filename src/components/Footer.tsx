import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="text-center p-4">
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; {new Date().getFullYear()} Lisbon Recycling | Built by
        Christopher Snay
      </Typography>
    </footer>
  );
}
