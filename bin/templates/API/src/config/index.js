const config = {
  port: process.env.PORT ? '' : Exposed_Port,
  hostname: process.env.HOSTNAME ? '' : 'localhost'
};

module.exports = config;
