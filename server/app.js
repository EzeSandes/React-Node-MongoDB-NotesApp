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

app.use('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on the server`);
  err.status = 'fail';
  err.statusCode = 404;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });

  // next();
});

module.exports = app;
