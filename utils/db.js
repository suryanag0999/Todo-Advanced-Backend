import mongoose from "mongoose";
// import dotenv from "dotenv";
import "dotenv/config";

// dotenv.config();
console.log("MongoDB URL:", process.env.MONGODB_URL);

export default function db() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Database is connected ..."))
    .catch(() => console.log("Error while connecting the mongodb"));
}
