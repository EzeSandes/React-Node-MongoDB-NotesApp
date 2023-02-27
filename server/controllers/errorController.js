const AppError = require('../utils/appError');

const sendErrorDev = (err, req, res) =>
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });

module.exports = (err, req, res, next) => {
  err.statusCode ??= 500;
  err.status ??= 'error';

  if (process.env.NODE_ENV === 'development') sendErrorDev(err, req, res);
};
