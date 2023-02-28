const express = require('express');
const cookieParcer = require('cookie-parser');
const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');
const globalErrorHandler = require('./controllers/errorController');
const app = express();
/*
 ****************************** MIDDLEWARES
 */

app.use(cookieParcer());

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
app.use('/api/v1/users', userRouter);

// In case there is no route.
app.use('*', globalErrorHandler);

module.exports = app;
