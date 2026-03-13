require('dotenv').config();

const config = {
  appId: 'app.autobhaiya.nakprc',
  appName: 'Auto Bhaiya',
  webDir: 'www',
  server: {
    url: process.env.TARGET_URL,
    cleartext: true
  }
};

module.exports = config;
