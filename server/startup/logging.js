import winston from "winston";
import "winston-mongodb";
import "express-async-errors";
import config from "config";

const mongoURI = config.get("mongoURI");
export default function () {
  winston.exceptions.handle(
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.add(
    new winston.transports.MongoDB({
      db: mongoURI,
      options: { useUnifiedTopology: true },
      level: "info",
    })
  );
}
