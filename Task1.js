const express = require('express')
const app = express()

const childProcess = require('child_process')
const scriptPath = 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js'

function runScript(scriptFail, callback) {
 
    let flag = false
    let process = childProcess.fork(scriptFail);
    process.on('error', err => {
        if (flag) return;
        flag = true
        callback(err)
    })
    process.on('exit', code => {
        if (flag) return
        flag = true
        let err = code === 0 ? null : new Error('exit code ' + code)
        callback(err)
    })  
}
app.post('/process', function (req, res) {
    try{
        runScript(scriptPath , err => {
            if(err) console.log('Ошибка в scriptPath')
            else console.log('Скриит успешно выпонен')
        })     
        res.send("Скрипт выполнился")
    }
    catch(err){
            console.log(' В Скрипте Task1 допушена ошибка')
    }
})
app.listen(3000, function () {
    console.log('Сервер был запушен !')
})

