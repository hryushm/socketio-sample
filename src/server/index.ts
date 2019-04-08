import express from "express";
import http from "http";
import socketio from "socket.io";
import path from "path";

const app = express();
const httpServer = new http.Server(app);
const io = socketio(httpServer);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../src/html/index.html"));
});

app.get("/js/bundle.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/bundle.js"));
});

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("chat message", msg => {
    console.log("message:" + msg);
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
