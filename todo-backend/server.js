const app = require("./src/app");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const server = app.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}`);
})

process.on('SIGINT', () => {
    server.close();
    console.log('Server is closed');
    process.exit();
})