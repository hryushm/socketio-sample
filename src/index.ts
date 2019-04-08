import express from "express";
import http from "http";
import socketio from "socket.io";
import path from "path";

const app = express();
const httpServer = new http.Server(app);
const io = socketio(httpServer);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../src/index.html"));
});

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
