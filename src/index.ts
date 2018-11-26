import { port } from "./config";
import server from "./server";

server.start({ port }, () => {
      console.log(`Server is running on port:${port}`);
});
