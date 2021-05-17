


module.exports.task1 = function archive_files(){
   
    const childProcess = require('child_process')
    
    let flag = false
    let process = childProcess.fork('C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js' , [1] )
   
    process.on('close', (code) =>{
       `Дочерний процесс вышел ${code}`
    })
    process.on('message', (code) =>{
        console.log(`Message to parent: ${code}`)
    })
    process.on('data', (data) => {
        console.log('Files list: \n', data)
     })

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

