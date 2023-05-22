const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const databaseConnect = require("./config/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const authRouter = require('./routes/authRoute')
const messengerRoute = require('./routes/messengerRoute');

dotenv.config({
  path: "backend/config/config.env",
});

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use('/api/chat', authRouter);
app.use('/api/chat', messengerRoute);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("This is a Real Time Chat App API server");
});

databaseConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
