const express = require('express');
const cookieParcer = require('cookie-parser');
const cors = require('cors');
const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');
const globalErrorHandler = require('./controllers/errorController');
const app = express();

/*
 ****************************** MIDDLEWARES
 */

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));

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
