const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Route files
const bootcamps = require("./routes/bootcamp");

// load the config files
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// app.use(logger);

// dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers:

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
  console.log(
    `Express server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
