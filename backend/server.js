const app = require("./app");
const dotenv = require("dotenv");
const connnetDatabase = require("./config/database");

dotenv.config({ path: "./config/config.env" });

connnetDatabase()

app.listen(process.env.PORT,()=>{
    console.log("server is running on " + process.env.PORT)
}) 