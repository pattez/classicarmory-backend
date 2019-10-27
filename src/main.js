const express = require('express');
const bodyParser = require('body-parser');
const routers = require('routers');

const port = 8090;
const app = express();


app.use(bodyParser.json({limit: '50mb', extended: true}));
routers.setup(app);
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:  ', 'Reason: ', reason, 'Promise: ', promise);
});

app.listen(port);
console.log(`Backend listening on port ${port}`);
