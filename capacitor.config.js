const fs = require('fs');
const path = require('path');
const envPath = path.resolve(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const dotenv = require('dotenv');
  Object.assign(process.env, dotenv.parse(envContent));
}

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
