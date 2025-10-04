import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStreet } from '../context/StreetContext';
import useDayCalculator from '../hooks/useDayCalculator';
import useDays from '../hooks/useDays';
import useStreets from '../hooks/useStreets';

export default function MainPage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { streetId } = useStreet();
  const { streets } = useStreets();
  const { days } = useDays();
  const { getNextRecyclingDay, getRemainingDays } = useDayCalculator();
  const street = streets.find((s) => s.id === streetId);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleStreetChange = (): void => {
    setAnchorEl(null);
    navigate('/street');
  };

  const nextPickup = useMemo<Date | undefined>(() => {
    if (!street || !days) {
      return undefined;
    }
    const result = getNextRecyclingDay(street, days);

    if (result && result.date) {
      return new Date(result.date);
    }
  }, [street, days]);

  const remainingDays = useMemo<number | string | undefined>(() => {
    if (!street || !days || !nextPickup) {
      return undefined;
    }

    const result = parseInt(getRemainingDays(nextPickup), 10);

    if (result == 0) {
      return 'Today';
    } else if (result == 1) {
      return 'Tomorrow';
    } else {
      return result;
    }
  }, [street, days, nextPickup, getRemainingDays]);

  const resultSize = useMemo<string>(() => {
    switch (remainingDays) {
      case 'Today':
        return 'text--4';
      case 'Tomorrow':
        return 'text--4';
      default:
        return 'text--7';
    }
  }, [remainingDays]);

  return (
    <section className="py-5 mx-auto">
      <Card elevation={5}>
        <CardHeader
          title={`${street?.name}`}
          sx={(bgColor) => ({ bgcolor: bgColor.palette.grey[900] })}
          subheader={`Next Pickup: ${nextPickup?.toLocaleDateString('en-US') ?? 'N/A'}`}
          action={
            <IconButton className="ms-3" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
          }
          avatar={
            <Avatar sx={(bgColor) => ({ bgcolor: bgColor.palette.warning.light })}>
              <CalendarMonthIcon />
            </Avatar>
          }
        />
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={handleStreetChange}>Change Street</MenuItem>
        </Menu>
        <CardContent className="d-flex flex-column text-center">
          {!street && <Typography variant="body1">No street selected.</Typography>}
          {!days && <Typography variant="body1">No recycling days available.</Typography>}

          {street && days && (
            <>
              <span className={resultSize}>{remainingDays}</span>
              {remainingDays !== 'Today' && remainingDays !== 'Tomorrow' && (
                <span className="fs-3 mt-2">Days Remaining</span>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
