const express = require('express');
const noteRouter = require('./routes/noteRoutes');
const app = express();
/*
 ****************************** MIDDLEWARES
 */

app.use(
  express.json({
    limit: '15kb',
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '15kb',
  })
);

/*
 ****************************** ROUTES
 */

app.use('/api/v1/notes', noteRouter);

module.exports = app;
