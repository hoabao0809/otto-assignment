const path = require('path');
const FileParser = require('../parsers/FileParser');
const ContactRepository = require('../repositories/contact.repo');
require('dotenv').config();
// const database = require('./src/databases/init.mongodb');

async function importDataFromFile(filePath) {
    try {
        const parser = new FileParser(filePath);
        const parsedData = await parser.parse();
        
        result = await ContactRepository.insertContacts(transformData(parsedData));
        console.log(result);
        console.log('Data imported successfully');
        process.exit(0); // Exit process after import
    } catch (error) {
      console.error('Error importing data:', error);
      process.exit(1); // Exit with error
    }
}

// Mapping array for transformation
const keyMappings = [
    { originalKey: 'First Name', newKey: 'firstName' },
    { originalKey: 'Last Name', newKey: 'lastName' },
    { originalKey: 'Title', newKey: 'title' },
    { originalKey: 'Country', newKey: 'country' },
    { originalKey: 'City', newKey: 'city' },
    { originalKey: 'Zip', newKey: 'zip' },
    { originalKey: 'Address Line 1', newKey: 'addressLine1' },
    { originalKey: 'Address Line 2', newKey: 'addressLine2' }
];
  
  
// Function to transform parsed data using keyMappings
function transformData(parsedData) {
    return parsedData.map(entry => {
      const transformedEntry = {};
      keyMappings.forEach(mapping => {
        transformedEntry[mapping.newKey] = entry[mapping.originalKey];
      });
      return transformedEntry;
  });
}

// Example usage
// const filePath = path.join(__dirname, 'src/_mock/mock-contacts.csv')
console.log(__dirname)
const filePath = path.join(__dirname, '_mock/mock-contacts.csv')
importDataFromFile(filePath);