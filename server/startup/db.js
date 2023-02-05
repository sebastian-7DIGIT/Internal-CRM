import config from "config";
import winston from "winston";
import mongoose from "mongoose";

const mongoDBOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongoURI = config.get("mongoURI");

function db() {
  mongoose
    .connect(mongoURI, mongoDBOptions)
    .then(() => winston.info("Connected to MongoDB..."))
    .catch((err) => winston.error(`Could not connect to MongoDB...${err}`));
}

export default db;
