import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import router from "./authors/index.js";

const server = express();
const port = 3002

server.use(cors());

server.use(express.json())

server.use("/authors", router)

console.log(listEndpoints(server))

server.listen(port, () => console.log(`server running on port: ${port}`))