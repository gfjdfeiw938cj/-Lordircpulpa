<<<<<<< HEAD
     
    let thingss = require('./script')
       
        module.exports.aa  = function () {       

        let points = [[thingss.task1.name, "1",1],[thingss.task1.name,"2",2]];
        let myArray = points.map( function(el){
            return {
                name:el[0],
                process: el[1],
=======
        
        


       
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
>>>>>>> 63d3e1f60cbfeb2128fe2f309c066b7e968604f4
                ID: el[2]
        };
        
    });
    
<<<<<<< HEAD
    let arr = JSON.stringify(myArray);
    return arr
}
=======
    let object = JSON.stringify(myArray);
    console.log(object)
    return object
}


>>>>>>> 63d3e1f60cbfeb2128fe2f309c066b7e968604f4
