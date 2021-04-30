// const path = require('path')
//  const aaaa  = path.resolve('/dfd' , "код для винрара .txt")
// //  console.log(__dirname + "/jfjfesw")
//     console.log(aaaa)

// const express = require('express')
// const app = express()

// const childProcess = require('child_process')
// const scriptPath = 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js'

// function runScript(scriptFile, callback) {
 
//     let flag = false
//     let process = childProcess.fork(scriptFile);
//     process.on('error', err => {
//         if (flag) return;
//         flag = true
//         callback(err)
//     })
//     process.on('exit', code => {
//         if (flag) return
//         flag = true
//         let err = code === 0 ? null : new Error('exit code ' + code)
//         callback(err)
//     })  
//     return process
// }
// app.post('/process', function (req, res) {
//     try{
//         runScript(scriptPath , err => {
//             if(err) console.log('Ошибка в scriptPath')
//             else console.log('Скрипт успешно выполнился')
//         })     
//         res.send("Скрипт выполнился")
//     }
//     catch(err){
//             console.log(' В Скрипте Task1 допушена ошибка')
//     }
// })
// app.listen(3000, function () {
//     console.log('Сервер был запушен !')
// })


// function User(login, lastVisit, avatar) {
//     this.login = login;
//     this.lastVisit = lastVisit;
//     this.avatar = avatar;
// }


// var user = new User (process , "01/02/2014", "name.jpg")


//-------------------------------------------------------------

// let ps = require('ps-node');

// ps.lookup({
// command: 'node',
// arguments: '--debug',
// }, function(err, resultList ) {
// if (err) {
//     throw new Error( err );
// }

// resultList.forEach(function( process ){
//     if( process ){

//         console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
//         }
//     });
// });

//---------------------------------------------------------------
// const psList = require('ps-list');

// psList().then(data => {
//     console.log(data);
//     //=> [{pid: 3213, name: 'node', cmd: 'node test.js', cpu: '0.1'}, ...] 
// });
//------------------------------------------------------------------

// import express from 'express'
// import path from 'path'
// const __dirname = path.resolve()

// app.use(express.static(path.resolve(__dirname, 'NPN менеджер пакетов' )))

// let aaa = require('./handler')
// import {runScript } from './handler.js'
// aaa()
// app.use(runScript)
// app.use(reqvestScript2)

// app.post('/process', function (req, res){
//    req.reqvestScript2()
//    res.send(`Ответ`)
// })



// let runScript = require('./handler')

// import {reqvestScript} from './handler.js'


// app.use(reqvestScript)





// //     // process.on('tasklist', function(err, stdout, stderr) {
// //     //     // // stdout-это строка, содержащая выходные данные команды.
// //     //     //  // разберите его и найдите процессы apache и mysql.
// //     //     // console.log(stdout)
        
// //     //     });

//     process.on('exit', code => {
//         if (flag) return
//         flag = true
//         let err = code === 0 ? null : new Error('exit code ' + code)
//         callback(err)
//     })  


// // //     let ID = function () {  
// // //         return '_' + Math.random().toString(36).substr(2, 9);
// // //       };
       
// // //     // function des (name, url){ 
// // //     //         this.name=name
// // //     //         this.ID = ID()                  
// // //     // } 
// // //   let ades=[]
// // //     ades.push(new des(process)) 
// // //     //return console.log(ades)


// // //     var points = [[52.0625,142.962494],[52.0625,143.129166],[52.054165,142.995834],[52.054165,143.079163],[52.054165,143.145828],];
// // // var myArray = points.map( function(el){
// // //     return {
// // //         name: el[0],
// // //         lon: el[1],
// // //         ID: el[2]
// // //     };
    
// // // });

// // // let ggfg = JSON.stringify( myArray);
// // // console.log(ggfg)
// }

// const scriptPath =  'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js'





const express = require('express')
const app = express()

let things2 = require('./database')

// const scriptPath = [ 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js']

//   app.post('/process', function (req, res) {
//     try{
//         things.runScript(scriptPath , err => {
//             if(err) console.log('Ошибка в scriptPath')
//             else console.log('Скрипт успешно выполнился')
//         })     
//         res.send(`Скрипт выполнился `)
       
//     }
//     catch(err){
//             console.log(' В Скрипте Task1 допушена ошибка')
//     }
// })



app.get('/process2', function (req, res){
    things2.base()
    res.send(`Список скриптов`)
})

// app.get('/process2', function (req, res){
//     res.send(`Сообшение отправлено`)
// })






// app.get('/proces', function (req, res){
//     req.
        
//     })
// })

app.listen(3000, function () {
    console.log('Сервер был запушен !')
})
//  app.get('/process', function (req, res) {
//     req.process
//  })



// app.get('/process', function (req, res){
//     req.status(200).json({
//         аа
//     })
// })

// app.put('/process', function (req, res){
//     res.status(200).json({
//         aa()
//     })
// })

// app.delete('/process', function (req, res){
//     res.status(200).json({
//         name
//     })
// })




// app.listen(3000, function () {
//     console.log('Сервер был запушен !')
// })


// var cp = require ('child_process') , 
//     psTree = require ('ps-tree') ; 

// var child = cp.exec("узел -e 'while (true);'" ,  function  ( )  {  /*...*/  } ) ; 

// psTree (child.pid , function( err ,  children )  { 
//   cp.spawn ( 'kill' ,['-9' ] .concat( children.map( function (p)  {  
//       return  p . PID  } ) ) ) ; 
// } ) ;

//----------------------------------------------
 // Выыод данных о процессах ПК диспечере задач 
 // const exec = childProcess.exec
//  exec('tasklist', function(err, stdout, stderr) {
// // stdout-это строка, содержащая выходные данные команды.
//  // разберите его и найдите процессы apache и mysql.
// console.log(stdout)
// });
//---------------------------------------------------------------
// var points = [[52.0625,142.962494],[52.0625,143.129166],[52.054165,142.995834],[52.054165,143.079163],[52.054165,143.145828],];
// var myArray = points.map( function(el){
//     return {
//         lat: el[0],
//         lon: el[1]
//     };
    
// });

// let ggfg = JSON.stringify( myArray);
// console.log(ggfg)
//-----------------------------------------------------

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };
//        let hfhf =  Object.entries(prices)
//   console.log(hfhf)
//-------------------------------------------------------
// function des (name, model, url){ 
//                   this.name=name 
                  
                  
//     }
    
//     ades=[]
//     ades.push(new des(fdf)) 
//     // ades[1]= new des("Nissan", "Almera")
//     // ades[3]=new des("Nissan", "Micra")
//     // ades[4]=new des("Nissan", "Murano")
//     // ades[5]=new des("Opel", "Astra")
//     // ades[6]=new des("Audi", "A4")  
//    console.log(ades)



//  function des (name, model, url){ 
//     return this.name=name            
// } 
// setTimeout(() => { 
//     function des (name, model, url){ 
//         return this.name=name            
//     }
//     let ades=[]
//     ades.push(new des(process))
//     console.log(ades)
// }, 7000);

// let ID = function () {  
//     return '_' + Math.random().toString(36).substr(2, 9);
//   };
   