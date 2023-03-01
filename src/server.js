import  Express from "express";
import listEndpoints from "express-list-endpoints";
import userRouter from "./api/authors/index.js";

const server = Express();

const port = 3002;


server.use("/authors", userRouter)
console.table(listEndpoints(server))

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});



