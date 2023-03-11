const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const userroute = require("./routes/userRoute")
const Tweetroute = require("./routes/tweetRoute");

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/v1",userroute)
app.use("/api/v1", Tweetroute);

module.exports = app