import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const SearchBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(1),
  flexDirection: 'column',
}));

const SearchBar = ({ search, handleSearchChange, handleSearchSubmit }) => {
  return (
    <SearchBox component="form" onSubmit={handleSearchSubmit}>
      <TextField
        label="Search Contacts"
        value={search}
        onChange={handleSearchChange}
        fullWidth
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </SearchBox>
  );
};

export default SearchBar;
