

const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;  
const app = express();
const jsonParser = express.json();
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const multer = require('multer');



const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true , capped : true, size:4000,  max : 1 });

let dbClient;
 
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "test");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

  
app.use(express.static(__dirname));

app.use(multer({storage:storageConfig}).single("filedata"));
 
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("usersdb").collection("users");
    app.listen(3000, function () {
        console.log('Сервер был запушен !')
    });
});
 
app.get("/users", function(req, res){
        
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, users){
         
        if(err) return console.log(err);
        res.send(users)
    });  
});

app.get("/users/:id", function(req, res){
        
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({_id: id}, function(err, user){
               
        if(err) return console.log(err);
        res.send(user);
    });
});

app.post("/users", jsonParser, function (req, res) {
   
    const fs = require('fs')
    const path = require('path');
   
    const file = req.file
    console.log(file)
    let fff  = path.dirname(file)
    console.log(fff)

    const folderName = 'C:/Users/user/Desktop/test'
    try {
      if (!fs.existsSync(folderName )){
      fs.mkdirSync(folderName )
         }
      } catch (err) {
      console.error(err)
      }
    let random16 = Math.floor(Math.random()*16777215).toString(16);
   
    const collection = req.app.locals.collection;
    const files = {name: random16, value: folderName};
    collection.insertOne(files, function(err, result){
               
        if(err) return console.log(err);
        res.send(files);
    });

});
    

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});
//--------------------------------------------------------------------
