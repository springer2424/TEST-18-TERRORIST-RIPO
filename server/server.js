import express from 'express';
import cors from 'cors'
import routs from "./routs/routt.js"

import path from "path";
const __dirname = path.resolve();
const teror_PATH = path.join(__dirname, "data", "terrorData.csv");

const app = express();

app.use(express.json());
app.use(cors())


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use("/",routs)

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
});