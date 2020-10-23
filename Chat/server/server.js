const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", function (socket) {
  console.log("co nguoi ket noi : " + socket.id);
  io.to(socket.id).emit("connected", socket.id);
  console.log(socket.adapter.rooms);
 
  socket.on("Room", function (room) {
    var listRoom = ["r1", "r2"];
      for (let i = 0; i <= listRoom.length; i++) {
        if (room === listRoom[i]) {
          socket.join(room);
          console.log(room);
          socket.room = room;
        }
      }
  });
  socket.on("message", ({ name, message, id_socket }) => {
    io.sockets.to(socket.room).emit("message", { name, message, id_socket });
  });
});

http.listen(4000, function () {
  console.log("listening on port 4000");
});
