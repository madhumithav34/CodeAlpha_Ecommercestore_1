const mongoose = require("mongoose");

const connectDatabase = async () => {
  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is undefined. Check config.env loading.");
    process.exit(1);
  }

  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected to host:", con.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
