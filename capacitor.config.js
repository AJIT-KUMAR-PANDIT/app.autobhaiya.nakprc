require('dotenv').config();

const config = {
  appId: 'app.autobhaiya.nakprc',
  appName: 'AutoBhaiya',
  webDir: 'www',
  server: {
    url: process.env.TARGET_URL,
    cleartext: true
  }
};

module.exports = config;
