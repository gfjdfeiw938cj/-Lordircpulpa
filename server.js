
const express = require('express')
const app = express()
const jsonParser = express.json();
let things2 = require('./database')

const scriptPath = [ 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js']

  app.post('/process', function (req, res) {
     
    try{
        things.runScript(scriptPath , err => {
            if(err) console.log('Ошибка в scriptPath')
            else console.log('Скрипт успешно выполнился')
        })     
        res.send(`Скрипт выполнился `)
    }
    catch(err){
            console.log(' В Скрипте Task1 допушена ошибка')
    }
})

  app.get('/process2', function (request, response){
    
    console.log(request.query);
    let names = things2.aa()
    response.send(names);
    next()
})

  app.delete("/process3", function(request, response){
       
    let names = things2.aa()
    let name1 = JSON.parse(names)
    let del = name1.splice(1, 1)
    data = JSON.stringify(del);
    response.send(data);
})
 
  app.put("/process4", jsonParser, function(request, response){
       
    let names = things2.aa()
    const names1 = JSON.parse(names);
    const result = names1.map((i) => {
        if (i.ID === 1) {
          return { ...i,
              process: 'value',
          }
        } else {
          return i;
        }
      });
        data = JSON.stringify(result);
        console.log(data)
        response.send(data);
})

  app.listen(3000, function () {
    console.log('Сервер был запушен !')
})

