import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

(async () => {
  try {
    await db.authenticate();
    console.log("Database connected.");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("DB connection failed:", error);
  }
})();
