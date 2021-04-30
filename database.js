        
        


       
      let thingssss = require('./script')
      module.exports.base = base

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


