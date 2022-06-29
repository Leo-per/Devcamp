const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });

  console.log(`monngo DB connected: ${conn.connection.host} `);
};

module.exports = connectDB;
