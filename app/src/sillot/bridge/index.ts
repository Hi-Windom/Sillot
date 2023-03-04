import { createServer } from "http";
import { Server } from "socket.io";

export class bS {
  constructor() {
  }
  newBridge() {
    /// #if !BROWSER
    const httpServer = createServer();
    const io = new Server(httpServer, {
      cors: {
        origin: "http://localhost:5173",
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    io.on("connection", (socket) => {
      console.log(socket.id);
      socket.emit("hello", "world");
      socket.emit(
        "createDOM",
        "id1",
        `
  <p id="main">
    <span class="prettify">
      keep me and make me pretty!
    </span>
  </p>
`
      );
    });

    httpServer.listen(3900);
    ///#endif
  }
}
