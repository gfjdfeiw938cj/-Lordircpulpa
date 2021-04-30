        
        
        
        // let thingsss = require('./handler')
       

    //     let ID = function () {  
    //         return '_' + Math.random().toString(36).substr(2, 9);
    //       };
           
    //     function des (name, url){ 
    //             this.name=name
    //             this.ID = ID()                  
    //      } 
    //   let ades=[]
    //     ades.push(new des(things.qqq)) 
        //return console.log(ades)
      

       
      let thingssss = require('./script')
      module.exports.base = base


      // const scriptPath = [ 'C:\\Users\\Артур\\все фаилы Node.js\\archive_file_new.js']

      function base () {       
        let ID = function () {  
            return '_' + Math.random().toString(36).substr(2, 9);
          };

        let points = [[thingssss.scriprs1() , "process 1",ID()],[thingssss.scriprs1(),"process 2",ID()]];
        let myArray = points.map( function(el){
            return {
                process:el[0],
                name: el[1],
                ID: el[2]
        };
        
    });
    
    let object = JSON.stringify(myArray);
    console.log(object)
    return object
}


