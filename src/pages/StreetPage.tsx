import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStreet } from '../context/StreetContext';
import useStreets from '../hooks/useStreets';
import type { Street } from '../models/Street';

export default function StreetPage() {
  const { streetId, setStreet } = useStreet();
  const { streets, loading, error } = useStreets();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  // Sync inputValue with selected streetId
  useEffect(() => {
    const selectedStreet = streets.find((s) => s.id === streetId);
    setInputValue(selectedStreet ? selectedStreet.name : '');
  }, [streetId, streets]);

  const handleStreetChange = (_event: any, newValue: Street | null) => {
    if (newValue?.id !== null && newValue?.id !== undefined) {
      setStreet(newValue.id);
      navigate('/');
    } else {
      setStreet(null);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Select Your Street
      </Typography>
      {loading && <Typography>Loading streets...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && !error && streets.length === 0 && (
        <Typography color="warning.main">
          No streets found. Check /streets.json and network tab.
        </Typography>
      )}

      {!loading && !error && streets.length > 0 && (
        <Autocomplete
          options={streets}
          getOptionLabel={(option) => option.name}
          value={streets.find((s) => s.id === streetId) || null}
          onChange={handleStreetChange}
          inputValue={inputValue}
          onInputChange={(_, newInputValue, reason) => {
            if (reason === 'clear') {
              setStreet(null);
              setInputValue('');
            } else {
              setInputValue(newInputValue);
            }
          }}
          renderInput={(params) => (
            <TextField {...params} label="Street" variant="outlined" />
          )}
          isOptionEqualToValue={(option, value) => option.id === value.id}
        />
      )}
    </Box>
  );
}
