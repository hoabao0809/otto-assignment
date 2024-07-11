import React, { useState } from 'react';
import { useSearchContactsQuery } from '../../api/contactApi';
import {
  Box,
  Pagination,
  CircularProgress,
  Typography,
} from '@mui/material';
import useDebounce from '../../hooks/useDebounce';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import { styled } from '@mui/system';

const PaginationContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'flex-end',
}));

const ContactsList = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10; // Set the limit for pagination
  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading, refetch } = useSearchContactsQuery({ keySearch: debouncedSearch, page, limit });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);  // Reset to first page on new search
    refetch(); // Refetch the data
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <SearchBar
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      {isLoading ? (
        <CircularProgress />
      ) : data?.data.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center">
          No contacts found
        </Typography>
      ) : (
        <ContactList contacts={data?.data} />
      )}
      {data && data.pages > 1 && (
        <PaginationContainer>
          <Pagination
            count={data.pages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </PaginationContainer>
      )}
    </>
  );
};

export default ContactsList;
