import { LocationOn } from '@mui/icons-material';
import {
  Autocomplete,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSavedStreet } from '../context/StreetContext';
import useStreets from '../hooks/useStreets';
import type { Street } from '../models/Street';
import { trackClarityEvent } from '../utils/ClarityUtil';

export default function StreetPage() {
  const { savedStreetId, setSavedStreetId } = useSavedStreet();
  const { streets, loading, error } = useStreets();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleStreetChange = (_event: any, newValue: Street | null) => {
    if (newValue?.id !== null && newValue?.id !== undefined) {
      setSavedStreetId(newValue.id);
      trackClarityEvent('set', 'street', newValue.name);
      navigate('/');
    } else {
      setSavedStreetId(null);
    }
  };

  useEffect(() => {
    const selectedStreet = streets.find((s) => s.id === savedStreetId);
    setInputValue(selectedStreet ? selectedStreet.name : '');
  }, [savedStreetId, streets]);

  return (
    <section className="d-flex flex-column align-items-center py-5">
      <Card elevation={5} className="w-fit" sx={{ width: '100%', maxWidth: 400 }}>
        <CardHeader
          title="Select Your Street"
          sx={(bgColor) => ({
            bgcolor: bgColor.palette.grey[900]
          })}
          avatar={
            <Avatar sx={(bgColor) => ({ bgcolor: bgColor.palette.warning.light })}>
              <LocationOn />
            </Avatar>
          }
        />
        <CardContent>
          {loading && <Typography>Loading streets...</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          {!loading && !error && streets.length === 0 && (
            <Typography color="warning.main">
              No streets found. Check /streets.json and network tab.
            </Typography>
          )}

          {!loading && !error && streets.length > 0 && (
            <Autocomplete
              size="medium"
              fullWidth
              options={streets}
              getOptionLabel={(option) => option.name}
              value={streets.find((s) => s.id === savedStreetId) || null}
              onChange={handleStreetChange}
              inputValue={inputValue}
              onInputChange={(_, newInputValue, reason) => {
                if (reason === 'clear') {
                  setSavedStreetId(null);
                  setInputValue('');
                } else {
                  setInputValue(newInputValue);
                }
              }}
              renderInput={(params) => (
                <TextField {...params} label="Street" variant="outlined" />
              )}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              className="my-2"
            />
          )}
        </CardContent>
      </Card>
    </section>
  );
}
