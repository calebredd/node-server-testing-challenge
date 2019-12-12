const port = process.env.PORT || 4000,
  server = require("./api/server.js");


server.listen(port, () => {
  console.log("Server listening on port:" + port);
});
