const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

const userRouter = require("./router/user");

app.use(express.json());

app.use(userRouter);

app.use(function (req, res, next) {
  const allowedOrigins = [
    "http://localhost:4200",
    "http://localhost:4300",
    "http://localhost:3000",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(4000, () => console.log("The Server Running on the port : 4000"));
