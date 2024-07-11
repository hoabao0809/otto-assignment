import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

const TitleTypography = styled(Typography)({
  fontWeight: 'bold',
});

const AddressBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const ContactItem = ({ contact }) => {
  return (
    <StyledCard>
      <CardContent>
        <TitleTypography variant="h6">
          {contact.firstName} {contact.lastName}
        </TitleTypography>
        <Typography variant="subtitle1">{contact.title}</Typography>
        <AddressBox>
          <Typography variant="body2">{contact.address.addressLine1}</Typography>
          <Typography variant="body2">{contact.address.addressLine2}</Typography>
          <Typography variant="body2">
            {contact.address.city}, {contact.address.country} - {contact.address.zip}
          </Typography>
        </AddressBox>
      </CardContent>
    </StyledCard>
  );
};

export default ContactItem;
