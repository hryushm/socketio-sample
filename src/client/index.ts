import $ from "jquery";
import io from "socket.io-client";

const socket = io();
$("form").submit(e => {
  e.preventDefault();
  socket.emit("chat message", $("#m").val());
  $("#m").val("");
  return false;
});
socket.on("chat message", (msg: string) => {
  $("#messages").append($("<li>").text(msg));
});
