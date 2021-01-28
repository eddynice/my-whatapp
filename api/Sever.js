//importing

var express = require('express');
var mongoose = require('mongoose');
const Messages = require('./models/dbmessage');
const Pusher = require("pusher");
const  Cors = require("cors")

//app config
const app  = express();
const port = process.env.PORT || 9000;


const pusher = new Pusher({
  appId: "1142629",
  key: "**************5c4",
  secret: "eb6c9f155de186dad3e7",
  cluster: "eu",
  useTLS: true
});

//middleware
app.use(express.json())
app.use(Cors())

//app.use((req, res, next)=>{
  //  res.setHeader("Access-control-Allow-Origin","*");
    //res.setHeader("Access-control-Allow-Headers","*");
    //next();
//})

//Db config
const connection_url="mongodb+srv://Admin:1qTrnKsvVJt3q9W2@cluster0.pl7r6.mongodb.net/whatapp?retryWrites=true&w=majority"
mongoose.connect(connection_url,{
   // mongoose.connect("mongodb://localhost/basic",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

const db =mongoose.connection
db.once("open", ()=>{
    console.log("DB ");

    const msgCollection = db.collection("whatsapp");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change)=>{
        console.log("A message",change);
        if(change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger("inserted", "messages",
             {
                name:messageDetails.name,
                message:messageDetails.message,
                timestamp:messageDetails.timestamp,
                recieved:messageDetails.recieved,
            }
            );
        }else{
            console.log("Error trigger pusher")
        }
    })
})


//api route

//app.get("/messages/sync", (req,res)=>res.status(200).send('hello world'))

app.get("/messages/sync",(req,res)=>{
    Messages.find((err, data)=>{
        if(err){
            res.status(500).send(err);

        }else{
            res.status(200).send(data)
        }
    })

} )
app.post("/messages", (req, res)=>{
    const dbmessage = req.body;
    Messages.create(dbmessage,(err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data)
        }
    })
})
app.listen(port, ()=>console.log(`listerning on localhost:${port}`))