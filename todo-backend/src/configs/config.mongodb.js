const config = {
    db: {
        uri: process.env.MONGO_URI || `mongodb://${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 27017}/${process.env.DB_NAME || 'todo-db'}` // Build URI from separate components if not specified
    }
};

module.exports = config;
