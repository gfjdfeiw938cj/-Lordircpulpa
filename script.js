
module.exports.scriprs1 = scriprs1

function scriprs1 (){
   let fun = {
    scriprs(scriptFile, callback){
    const childProcess = require('child_process')
    
    let flag = false
    let process = childProcess.fork(scriptFile , [1] )
   
    process.on('close', (code) =>{
       `Дочерний процесс вышел ${code}`
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
}
return fun
}

// function base () {       
//     let ID = function () {  
//         return '_' + Math.random().toString(36).substr(2, 9);
//       };

//     let points = [[thingssss.scriprs1 , "process 1",ID()],[thingssss.scriprs1,"process 2",ID()]];
//     let myArray = points.map( function(el){
//         return {
//             process:el[0],
//             name: el[1],
//             ID: el[2]
//     };
    
// });

// let object = JSON.stringify(myArray);
// console.log(object)
// return object
// }

// base()