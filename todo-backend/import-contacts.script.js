const FileParser = require('./src/utils/parsers/FileParser');
const ContactRepository = require('./src/repositories/contact.repo');
const path = require('path');
require('dotenv').config();
const database = require('./src/databases/init.mongodb');

async function importDataFromFile(filePath) {
    try {
        const parser = (new FileParser(filePath)).createParser();
        const parsedData = await parser.parse(filePath);
        const transformedData = transformData(parsedData);
        const data = prepareInsertedContacts(transformedData)
        result = await ContactRepository.insertContacts(data);
        console.log('Data imported successfully');
        process.exit(0); // Exit process after import
    } catch (error) {
      console.error('Error importing data:', error);
      process.exit(1); // Exit with error
    }
}

function prepareInsertedContacts(data)
{
  if (!data.length) return [];
  return data.map((contact) => {
    const {firstName, lastName, title, ...addressData} = contact;
    return {
      firstName, 
      lastName,
      title,
      address: addressData
    }
  })
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
const filePath = path.join(__dirname, 'src/_mock/mock-contacts.csv')
importDataFromFile(filePath);