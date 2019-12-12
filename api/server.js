const express = require("express"),
  server = express();
  studentRoute = require("../students/students-route.js"),
  teacherRoute = require("../teachers/teachers-route.js");

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({message:"Welcome to the Server"});
});

server.get("/api", (req, res) => {
  res.status(200).send("Welcome to the API");
});

server.use("/api/students", studentRoute);
server.use("/api/teachers", teacherRoute);

module.exports = server;
