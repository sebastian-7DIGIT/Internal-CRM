import express from "express";
import config from "config";
import cors from "cors";
import winston from "winston";
import http from "http";
import db from "./startup/db.js";
import logging from "./startup/logging.js";
import routes from "./startup/routes.js";

const app = express();
const server = http.createServer(app);

const port = config.get("port");

app.use(cors());

logging();
db();
routes(app);

const PORT = process.env.PORT || port;
server.listen(PORT, () => winston.info(`Server listenning on port ${PORT}...`));
