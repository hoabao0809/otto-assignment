import React from 'react';
import { List } from '@mui/material';
import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
