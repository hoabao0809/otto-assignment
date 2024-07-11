const mongoose = require('mongoose');

const {db : {uri, host, port, name}} = require('../configs/config.mongodb.js')
// const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
    constructor(type = 'mongodb') {
        this.connect(type);
    }
    // MongoDB specific connection setup
    connectMongoDB() {
        mongoose.connect(uri)
            .then(() => {
                console.log('Connect MongoDB successfully');
            })
            .catch((error) => {
                console.log(`Connect MongoDB failure: ${error}`);
            });

        if (process.env.MONGODB_DEBUG === 'true') {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }
    }

        // Main connect method to handle different databases
        connect(type = 'mongodb') {
            switch (type) {
                case 'mongodb':
                    this.connectMongoDB();
                    break;
 
                // Add cases for other databases here
                default:
                    console.log(`Unsupported database type: ${type}`);
            }
        }


    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;