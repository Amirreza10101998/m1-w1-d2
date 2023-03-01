/*

GET /authors => returns the list of authors -> GET http://localhost:5000/authors
GET /authors/123 => returns a single author -> GET http://localhost:5000/authors/:userId
POST /authors => create a new author -> POST http://localhost:5000/authors/ (+ body) 
PUT /authors/123 => edit the author with the given id -> PUT http://localhost:5000/authors/:userId
DELETE /authors/123 => delete the author with the given id -> DELETE http://localhost:5000/authors/:userId

*/

import Express from "express";
import fs from 'fs'

const userRouter = Express.Router()

//const userJSONPath = 

console.log(import.meta.url)

//1.
userRouter.get("/", (req, res) => {
    const fileContent = JSON.parse(fs.readFileSync())
})

//2.
userRouter.get("/:userId", (req, res) => {})

//3.
userRouter.post("/", (req, res) => {})

//4.
userRouter.put("/:userId", (req, res) => {})

//5.
userRouter.delete("/:userId", (req, res) => {})

export default userRouter
