const http = require('http');
const app = require('./app');
const server = http.createServer(app.callback());
const config = require('./config');

module.exports = server.listen(config.port, err => {
  if (err) return console.error('Failed to start server', err);
  console.log(`Service_Name API started on ${config.hostname+config.port}`);
});
