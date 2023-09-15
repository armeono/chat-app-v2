import { Server } from "socket.io";

const io = new Server(8000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("message", (message, room) => {
    console.log("Message: ", message);
    console.log("Room: ", room);

    socket.broadcast.emit("message", message);
  });
});
