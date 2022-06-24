const express = require("express");
const dotenv = require("dotenv");

// load the config files
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
  console.log(
    `Express server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
