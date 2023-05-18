const express = require("express");
const app = express();
const dotenv = require("dotenv");

const databaseConnect = require("./config/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const authRouter = require('./routes/authRoute')

dotenv.config({
  path: "backend/config/config.env",
});

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/chat',authRouter);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("This is a Real Time Chat App API server");
});

databaseConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
