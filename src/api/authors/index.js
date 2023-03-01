/*

GET /authors => returns the list of authors -> GET http://localhost:5000/authors
GET /authors/123 => returns a single author -> GET http://localhost:5000/authors/:userId
POST /authors => create a new author -> POST http://localhost:5000/authors/ (+ body) 
PUT /authors/123 => edit the author with the given id -> PUT http://localhost:5000/authors/:userId
DELETE /authors/123 => delete the author with the given id -> DELETE http://localhost:5000/authors/:userId

*/

import Express from "express";
import fs from 'fs'
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const authorRouter = Express.Router()

/*const userJSONPath = 
//1.
console.log("currrent file url:", import.meta.url)
console.log("current file path:", fileURLToPath(import.meta.url))
//2.
console.log("parents folder path:", dirname(fileURLToPath(import.meta.url)))
//3.
console.log("target:", join(dirname(fileURLToPath(import.meta.url)), "users.json"))
*/


const authorJSONPath = join(dirname(fileURLToPath(import.meta.url), "author.json"));


//1.
authorRouter.get("/", (req, res) => {
    fs.readFileSync(authorJSONPath) 
})

//2.
authorRouter.get("/:userId", (req, res) => {})

//3.
authorRouter.post("/", (req, res) => {})

//4.
authorRouter.put("/:userId", (req, res) => {})

//5.
authorRouter.delete("/:userId", (req, res) => {})

export default authorRouter
