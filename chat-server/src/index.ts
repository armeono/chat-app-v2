import { Server } from "socket.io";

const io = new Server(8000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (receivedObject) => {
    socket.to(receivedObject.room).emit("message", receivedObject);
  });

  socket.on("setup", (id) => {
    socket.join(id);
  });
});
