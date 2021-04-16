const express = require('express')
const app = express()

const childProcess = require('child_process')
const scriptFolder = 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js'

app.post('/process', function (req, res) {
    function runScript(scriptFail, callback) {
        let Uslov = false
        let process = childProcess.fork(scriptFail);
        process.on('error', function (err) {
            if (Uslov) return;
            Uslov = true
            callback(err)
        })
        process.on('exit', function (code) {
            if (Uslov) return
            Uslov = true
            let err = code === 0 ? null : new Error('exit code ' + code)
            callback(err)
        })
    }
    runScript(scriptFolder, function (err) {
    if (err) throw err;
    console.log('Скрипт выполнился');
    })
    res.send("Скрипт выполнился")
})
app.listen(3000, function () {
    console.log('Сервер был запушен !')
})

