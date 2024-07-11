const {
  model,
  Schema
} = require('mongoose');

const DOCUMENT_NAME = 'Contact';
const COLLECTION_NAME = 'contacts';

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  title: String,
  address: {
    country: String,
    city: String,
    zip: String,
    addressLine1: String,
    addressLine2: String
  }
}, {
  collection: COLLECTION_NAME,
  timestamps: false,
});

module.exports = {
  Contact: model(DOCUMENT_NAME, contactSchema),
};