const express = require('express');
const noteRouter = require('./routes/noteRoutes');
const globalErrorHandler = require('./controllers/errorController');
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

// In case there is no route.
app.use('*', globalErrorHandler);

module.exports = app;
