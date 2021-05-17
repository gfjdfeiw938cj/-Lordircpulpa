     
    let thingss = require('./script')
       
        module.exports.aa  = function () {       

        let points = [[thingss.task1.name, "1",1],[thingss.task1.name,"2",2]];
        let myArray = points.map( function(el){
            return {
                name:el[0],
                process: el[1],
                ID: el[2]
        };
        
    });
    
    let arr = JSON.stringify(myArray);
    return arr
}
