const CsvParser = require('./CsvParser'); 

class FileParser {

    constructor(filePath) {
        this.filePath = filePath;
    }

    // Builder method to create parser based on file extension
    createParser() {
        const extension = this.filePath.split('.').pop().toLowerCase(); // Get file extension
        switch (extension) {
            case 'csv':
                return new CsvParser();
      
            default:
                throw new Error(`Unsupported file format: ${extension}`);
        }
    }
}

module.exports = FileParser;