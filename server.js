
const express = require('express')
const app = express()
const jsonParser = express.json();
const fs = require("fs");
app.use(express.static(__dirname + "/public"));

const scriptPathg = 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js'

const filePath = "111.json";
 
  app.get("/process", function(req, res){
       
    const content = fs.readFileSync(filePath,"utf8");
    const jsonDatabase = JSON.parse(content);
    res.send(jsonDatabase);
    });

  app.get("/process/:id", function(req, res){
       
    const id = req.params.id
    const content = fs.readFileSync(filePath, "utf8")
    const jsonDatabase = JSON.parse(content)
   
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
      req.body.name = 'archive_file_new'
      req.body.script = scriptPathg
      console.log(req.body)
    
      let arrEl = {name: req.body.name ,script: req.body.script}
      
      let data = fs.readFileSync(filePath, "utf8")
      let jsonDatabase = JSON.parse(data)
     
      const id = Math.max.apply(Math,jsonDatabase.map(el => el.id))
      if(-Infinity == id){arrEl.id  = 0 }else{ arrEl.id = id+1}
  
      jsonDatabase.push(arrEl)

      data = JSON.stringify(jsonDatabase)
      fs.writeFileSync(filePath, data)

      const process = require("child_process").fork(req.body.script)
      process.on('error', err => {
        if(err)console.log(` В Скрипте Task1 допушена ошибка ${err}`)
        else console.log('Скрипт успешно выполнился')
      })
      process.on('Exit', code => {
        console.log(`код выхода: ${code}`)
      })
      res.send( req.body)
      }
      catch(err){
        console.log(' В Скрипте server допушена ошибка')
        res.send(` В Скрипте server допушена ошибка `)
    }
  });
  
  app.put("/process/:id/:name/:script", jsonParser, function(req, res){
   
      const id = req.params.id;  
      const name = req.params.name;
      const script = req.params.script;
      let data = fs.readFileSync(filePath, "utf8")
      const jsonDatabase = JSON.parse(data)
    
      let arrEl =  jsonDatabase.find(el => el.id == id)
    
      if(arrEl){
        arrEl.name = name;
        arrEl.script = script;
        data = JSON.stringify(jsonDatabase);
        fs.writeFileSync(filePath, data);
        res.send(jsonDatabase);
        }
      else{
          res.status(404).send(arrEl);
      }
  });

  app.delete("/process/:id", function(req, res){
       
      const id = req.params.id;
      let data = fs.readFileSync(filePath, "utf8");
      let jsonDatabase = JSON.parse(data);
      let index = jsonDatabase.indexOf(jsonDatabase.find(el => el.id==id))

    if(index > -1 ){
        jsonDatabase.splice(index, 1)[0];
        data = JSON.stringify(jsonDatabase);
        fs.writeFileSync(filePath , data);
        res.send(jsonDatabase)
    }
    else{
      setTimeout(() => res.status(403).end('Процес был принудительно остановлен'), 1000);
    }
  });

  app.listen(3000, function () {
    console.log('Сервер был запушен !')
  })
