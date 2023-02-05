import winston from "winston";

//Funciton which catches any error/exception thrown withing the existent routes.
export default function error(err, req, res, next) {
  winston.error(err.message, err);

  // error
  // warn
  // info
  // verbose
  // debug
  // silly

  res.status(500).send("Something failed.");
}
