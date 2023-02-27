const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Config .env variables
dotenv.config();

mongoose
  .connect(
    process.env.DATABASE_URL.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD
    ),
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('DB conection successful!');
  });

/*
 ********************************** SERVER ****************
 */

const PORT = process.env.PORT ?? 3000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
