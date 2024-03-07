const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


/* mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/gobierno").then(_=>{
    console.log("------* Connected to Database *------");
})
// Exit application on error
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ${err}');
    process.exit(-1);
}); */

app.use(express.json({limit:'59'}));
app.use(express.urlencoded({limit: '50mb', extended:
 true }));

 app.use(cors());

 app.listen(4000, ()=>{
    console.log("Yeiii mi servidor jala XDDD")
 })