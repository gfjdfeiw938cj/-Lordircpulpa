
const express = require('express')
const app = express()
const jsonParser = express.json();
let things2 = require('./script')
const fs = require("fs");
app.use(express.static(__dirname + "/public"));

const scriptPathg = 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js'

const filePath = "111.json";

let scriptFile = things2.task1

  app.get("/process", function(req, res){
       
    const content = fs.readFileSync(filePath,"utf8");
    const jsonDatabase = JSON.parse(content);
    res.send(jsonDatabase);
    });

  app.get("/process/:id", function(req, res){
       
    const id = req.params.id
    const content = fs.readFileSync(filePath, "utf8")
    const jsonDatabase = JSON.parse(content)
    // let arrEl = null
 
    // for(let i=0; i<jsonDatabase.length; i++){
    //     if(jsonDatabase[i].id==id){
    //         arrEl = jsonDatabase[i];
    //         break;
    //     }
    // }
   let arrEl =  jsonDatabase.find(el => el.id==id )  

    if(arrEl){
        res.send(arrEl);
    }
    else{
        res.status(404).send();
    }
});

  app.post('/process',jsonParser, function (req, res) {
    try{
    req.body.name = scriptFile.name
    req.body.script = scriptPathg
    console.log(req.body)
    
    let arrEl = {name: req.body.name ,script: req.body.script}
    console.log(req.body)

    let data = fs.readFileSync(filePath, "utf8")
    let jsonDatabase = JSON.parse(data)

    const id= Math.max.apply(Math,jsonDatabase.map(function(el){return el.id}))
        
    arrEl.id = id+1;
   
    jsonDatabase.push(arrEl)

    data = JSON.stringify(jsonDatabase, function(k,v){
        if(typeof v === "function")
          return v.toString();
        return v;
    });
    fs.writeFileSync(filePath, data)

    const process = require("child_process").fork(req.body.script)
    process.on('error', err => {
        if(err)console.log(` В Скрипте Task1 допушена ошибка ${err}`)
        else console.log('Скрипт успешно выполнился')
    })
    process.on('Exit', code => {
        console.log(`код выхода: ${code}`)
    })
    res.send(`Скрипт успешно выполнился ${req.body}`)
    }
    catch(err){
        console.log(' В Скрипте server допушена ошибка')
        res.send(` В Скрипте server допушена ошибка `)
    }
  });
  
  app.put("/process", jsonParser, function(req, res){
        
    req.body.id = 3 // <= введите свой id
    req.body.name = 'dsadasdasdasdasdasdasdasdasdas'
    req.body.script = scriptPathg 
        
    let data = fs.readFileSync(filePath, "utf8")
    const jsonDatabase = JSON.parse(data)
    console.log(jsonDatabase)
    let arrEl =  jsonDatabase.find(el => el.id == req.body.id)
    
        if(arrEl){
            arrEl.name  = req.body.name;
            arrEl.script = req.body.script;
            data = JSON.stringify(jsonDatabase);
            fs.writeFileSync(filePath, data);
            res.send(req.body);
        }
      else{
          res.status(404).send(arrEl);
      }
  });

  app.delete("/process/:id", function(req, res){
       
    const id = req.params.id;
    let data = fs.readFileSync(filePath, "utf8");
    let jsonDatabase = JSON.parse(data);
    // let index = -1;
    
    // for(let i=0; i < jsonDatabase.length; i++){
    //     if(jsonDatabase[i].id==id){
    //         index=i;
    //         break;
    //     }
    // }
    let index = arr.indexOf(el => el.id == req.body.id)
    // let index =  jsonDatabase.find(el => el.id==id )
    console.log(index)
    if(index > -1){
        const arrEl = jsonDatabase.splice(index, 1)[0];
        data = JSON.stringify(jsonDatabase);
        fs.writeFileSync(filePath, data);
        res.send(req.body);
    }
    else{
        res.status(404).send();
    }
});

  app.listen(4000, function () {
    console.log('Сервер был запушен !')
})

