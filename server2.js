
const express = require('express')
const app = express()

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


app.get('/process2', function (req, res){
    things2.base()
    res.send(`Список скриптов`)
})

app.listen(3000, function () {
    console.log('Сервер был запушен !')
})
