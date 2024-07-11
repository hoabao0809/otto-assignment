// src/features/weather/SearchBar.js
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch, defaultCity }) => {
  const [searchTerm, setSearchTerm] = useState(defaultCity);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display='inline-flex' width={1} gap={1} mb={2}>  
      <TextField
        label="Enter city"
        value={searchTerm}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
