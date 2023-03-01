import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import router from "./authors/index.js";
import { notFound, forbidden, catchAllErrorHandler } from "./authors/errorHandlers.js";

const server = express();
const port = 3002

server.use(cors());

server.use(express.json())

server.use("/authors", router)

/*----------Error Handlers----------*/
server.use(notFound);
server.use(forbidden);
server.use(catchAllErrorHandler);








console.table(listEndpoints(server))

server.listen(port, () => console.log(`server running on port: ${port}`))