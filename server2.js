const express = require('express')
const app = express()
const jsonParser = express.json();
let things2 = require('./script')
const fs = require("fs");
app.use(express.static(__dirname + "/public"));

const scriptPath = [ 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js']

const filePath = "obj3.json";

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
    let arrEl = null
 
    for(let i=0; i<jsonDatabase.length; i++){
        if(jsonDatabase[i].id==id){
            arrEl = jsonDatabase[i];
            break;
        }
    }
    if(arrEl){
        res.send(arrEl);
    }
    else{
        res.status(404).send();
    }
});

  app.post('/process',jsonParser, function (req, res) {
    try{

    const nameScript  = req.body.name = scriptFile.name  
    const scriptPath = req.body.script = scriptFile
    
    let arrEl = {name: nameScript ,script: scriptPath}
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
   
    scriptFile(scriptPath , err => {
        if(err) console.log('Ошибка в scriptPath')
        else console.log('Скрипт успешно выполнился')
    })     
        res.send(`Скрипт выполнился ${scriptFile.name}`)

    }
    catch(err){
        console.log(' В Скрипте Task1 допушена ошибка')
        res.send(` В Скрипте Task1 допушена ошибка `)
    }
  });
  
  app.put("/process", jsonParser, function(req, res){
        
    const scriptId = req.body.id = 5 // <= введите свой id
    const scriptName = req.body.name = 'введите свои значение'
    const script = req.body.script = 'введите свои значения'
        
    let data = fs.readFileSync(filePath, "utf8")
    const jsonDatabase = JSON.parse(data)
    let arrEl
    for(let i=0; i<jsonDatabase.length; i++){
        if(jsonDatabase[i].id==scriptId){
            arrEl = jsonDatabase[i];
            break;
        }
    }
        if(arrEl){
            arrEl.name  = scriptName;
            arrEl.script = script;
            data = JSON.stringify(jsonDatabase);
            fs.writeFileSync(filePath, data);
            res.send(arrEl);
        }
      else{
          res.status(404).send(arrEl);
      }
  });

  app.delete("/process/:id", function(req, res){
       
    const id = req.params.id;
    let data = fs.readFileSync(filePath, "utf8");
    let jsonDatabase = JSON.parse(data);
    let index = -1;
    for(let i=0; i < jsonDatabase.length; i++){
        if(jsonDatabase[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        const arrEl = jsonDatabase.splice(index, 1)[0];
        data = JSON.stringify(jsonDatabase);
        fs.writeFileSync(filePath, data);
        res.send(arrEl);
    }
    else{
        res.status(404).send();
    }
});

  app.listen(3000, function () {
    console.log('Сервер был запушен !')
})