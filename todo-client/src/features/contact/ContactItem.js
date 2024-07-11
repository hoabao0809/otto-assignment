import React from 'react';
import { CardContent, Typography, Box, Stack, Avatar,Grid } from '@mui/material';
import { styled } from '@mui/system';
import PlaceIcon from '@mui/icons-material/Place';
import { stringAvatar } from './utils';
import StyledCard  from '../../components/StyledCard';

const TitleTypography = styled(Typography)({
  fontWeight: 'bold',
});

const ContactItem = ({ contact }) => {
  return (
    <StyledCard sx={{marginBottom: 2, padding: 2}}> 
      <CardContent>
        <Grid container>  
        <Grid item xs={12} sm={4}>  
          <Stack direction='row' spacing={1} alignItems='center' >
              <Avatar {...stringAvatar(`${contact.firstName} ${contact?.lastName}` )} />
          <Box paddingLeft={1}>
            <TitleTypography variant="h6">
              {contact.firstName} {contact?.lastName}
            </TitleTypography>
            <Typography variant="subtitle1">{contact.title}</Typography>
          </Box>
          </Stack>
          
          </Grid>
      
          <Grid item xs={12} sm={8}>  
            <Box>
              <Stack direction='row' spacing={1}>
                <PlaceIcon />
                <Typography variant="body2">
                {contact.address.city}, {contact.address.country} - {contact.address.zip}
                </Typography>
              </Stack>
              <Box sx={{paddingLeft: 4}}>
                <Typography variant="body2">{contact.address.addressLine2}</Typography>
                <Typography variant="body2">{contact.address.addressLine1}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default ContactItem;
