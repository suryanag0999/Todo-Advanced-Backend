import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./utils/db.js";
import router from "./routes/task.routes.js";

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Run Database
db();
//Routes
app.use("/api/v2", router);

//Connection
app.listen(port, () => {
  console.log(`Server is running on port ${port}...😊`);
});
