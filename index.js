const express = require("express")
const ejs = require("ejs")
const path = require("path")
const { connectToMongo } = require("./connection")
const { logReqRes } = require("./Middlewares/index.js")
const router = require("./Routes/url")
const homerouter = require("./Routes/home")
const app = express()
const Port=8001



connectToMongo("mongodb://localhost:27017/URL_Shortener_DB").then(()=>{
    console.log("MongoDB connected.")
})

app.set("view engine","ejs")
app.set("views",path.resolve("./Views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logReqRes("log.txt"))

app.use("/url",router)
app.use("/",homerouter)

app.listen(Port,()=>{
    console.log("Server started at ",Port)
})