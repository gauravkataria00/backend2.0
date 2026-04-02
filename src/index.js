const mongoose = require("mongoose");
const express = require("express");
const route  = require("./Routes/Userroutes")

const app = express();
app.use(express.json())

const port = 5000; 

const mogourl = "mongodb+srv://gavim0009_db_user:pQS8GCAUGmS7V9eD@gourav.qnogaww.mongodb.net/?appName=Gourav"
mongoose.connect(mogourl)

.then(()=> console.log(` mongo db connect`))
.catch((e)=>console.log(` mongo db error${e}`))

app.use("/" , route)


app.listen(port,() => {console.log(`Server is running on port ${port}  `)})

