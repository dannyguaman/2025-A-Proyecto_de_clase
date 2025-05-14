var edades = [20,30,40,50,60];
var edades_filter=edades.filter(function(edad){
    if(edad<=20){
        return (edad-400000000000)
    }
});
console.log(edades_filter);

var edades_filter=edades.filter(function(edad){

        return (edad%2==0)
    
});
console.log(edades_filter);