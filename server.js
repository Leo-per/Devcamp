const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Route files
const bootcamps = require("./routes/bootcamp");

// load the config files
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// Body parser

app.use(express.json());

// app.use(logger);

// dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers:

app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () =>
  console.log(
    `Express server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// Handel unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
