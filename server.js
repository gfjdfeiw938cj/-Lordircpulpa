
const express = require('express')
const app = express()
const jsonParser = express.json();
const fs = require("fs");
app.use(express.static(__dirname + "/public"));
const pros = require("child_process")

const filePath = "dataBase.json";
 
  app.get("/process", function(req, res){
       
      const content = fs.readFileSync(filePath,"utf8");
      const jsonDatabase = JSON.parse(content);
      res.send(jsonDatabase)
      })

  app.get("/process/:pid", function(req, res){
       
      const pid = req.params.pid
      const content = fs.readFileSync(filePath, "utf8")
      const jsonDatabase = JSON.parse(content)
   
      let arrEl =  jsonDatabase.find(el => el.pid==pid )  

        if(arrEl){ res.send(arrEl) }else{res.status(404).send()}})

  app.post('/process',jsonParser, function (req, res) {
    
      const nameScript = req.body.name 
      const pathFile = req.body.script 
      
      let arrEl = {name:nameScript ,script:pathFile}
      
      let data = fs.readFileSync(filePath, "utf8")
      let jsonDatabase = JSON.parse(data)
     
      let indexerPid = pros.fork(pathFile)
      
      arrEl.pid = indexerPid.pid

      jsonDatabase.push(arrEl)
       console.log(arrEl)
      data = JSON.stringify(jsonDatabase,null, 2)
      fs.writeFileSync(filePath, data)

      process.on('error', err => {
        if(err)console.log(` В Скрипте Task1 допушена ошибка ${err}`)
        else console.log('Скрипт успешно выполнился')
      })
      process.on('Exit', code => {
        console.log(`код выхода: ${code}`)
      })

      res.send( req.body) 
  });
  
  app.put("/process",jsonParser, function(req, res){
       
      const content = fs.readFileSync(filePath,"utf8");
      const jsonDatabase = JSON.parse(content);
      res.send(jsonDatabase)
      })

  app.put("/process/:pid", jsonParser, function(req, res){
   
      let pid = req.params.pid 
      let script = req.body.script 
      let name = req.body.name 
      
      let data = fs.readFileSync(filePath, "utf8")
      let jsonDatabase = JSON.parse(data)
    
      let arrEl = jsonDatabase.find(el => el.pid == pid)
       console.log(arrEl)
      if(arrEl){
        arrEl.name = name;
        arrEl.script = script;
        data = JSON.stringify(jsonDatabase,null, 2);
        fs.writeFileSync(filePath, data);
        res.send(jsonDatabase);
        }
      else{
          res.status(404).send(arrEl);
      }
  });

  app.delete("/process/:pid", function(req, res){
      const pid = req.params.pid;
      let data = fs.readFileSync(filePath, "utf8");
      let jsonDatabase = JSON.parse(data);
      let index = jsonDatabase.indexOf(jsonDatabase.find(el => el.pid==pid))

      if(index > -1 ){
        jsonDatabase.splice(index, 1)[0]

      data = JSON.stringify(jsonDatabase,null, 2);
      fs.writeFileSync(filePath , data);
      res.send(jsonDatabase)
     
      process.kill(pid)
      
    }
    else{
      setTimeout(() => res.status(403).end('Процес был принудительно остановлен'), 1000);
    }
  });

  app.listen(3000, function () {
      console.log('Сервер был запушен !')
  })
