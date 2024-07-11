const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 3052
    },
    db: {
        uri: process.env.MONGO_URI,
        host: process.env.DEV_DB_HOST || '127.0.0.1',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'todo-dbDEV'
    }
}

const prod = {
    app: {
        port: process.env.PRO_APP_PORT || 3056
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: process.env.PRO_DB_PORT || 27017,
        name: process.env.PRO_DB_NAME || 'todo-dbPRO'
    }
}

const config = process.env.NODE_ENV === 'production' ? prod : dev;
module.exports = config;