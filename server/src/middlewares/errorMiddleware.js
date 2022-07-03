const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const errorMiddleware = (error, _req, res, _next) => { 
  const { status, message } = error;
  if (status) return res.status(status).json({ message});
  
  console.error(error)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR});
}

module.exports = errorMiddleware;