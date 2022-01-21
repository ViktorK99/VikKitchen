require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./config/routes');

require('./config/express')(app)

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Listening at port 3000`)
})