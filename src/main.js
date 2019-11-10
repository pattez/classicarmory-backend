const express = require('express');
const bodyParser = require('body-parser');
const routers = require('routers');
const rateLimit = require('express-rate-limit');

const port = 8090;
const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 100 requests per windowMs
});

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(limiter);
routers.setup(app);
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:  ', 'Reason: ', reason, 'Promise: ', promise);
});

app.listen(port);
console.log(`Backend listening on port ${port}`);
