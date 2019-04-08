import express from "express";
import http from "http";
import path from "path";

const app = express();
const httpServer = new http.Server(app);

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../src/index.html"));
});

httpServer.listen(3000, function() {
  console.log("listening on *:3000");
});
