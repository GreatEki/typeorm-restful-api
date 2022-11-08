import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/database";
import path from "path";

const app = express();

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

const PORT = process.env.PORT || 8005;

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Application running on PORT: ${PORT}`);
});
