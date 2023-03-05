import { createServer } from "http";
import { Server } from "socket.io";

export class bS {
  public io: Server = null;
  constructor() {
  }
  newBridge() {
    const httpServer = createServer();
    this.io = new Server(httpServer, {
      cors: {
        origin: "http://localhost:5173",
        allowedHeaders: ["sillot-header"],
        credentials: true,
      },
    });

    this.io.on("connection", (socket) => {
      console.log(socket.id);
      socket.emit("init",{})
//       socket.emit(
//         "createDOM",
//         "id1",
//         `
//   <p id="main">
//     <span class="prettify">
//       keep me and make me pretty!
//     </span>
//   </p>
// `
//       );
    });

    httpServer.listen(3900);
  }
  createDOM(id: string, dom: string) {
    this.io?.sockets.emit("createDOM", id , dom);
  }
}
