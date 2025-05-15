var edades = [20,30,34,8];

edades.map(function(x){  if(x<18){return x+4;}else{return x;} });

console.log(edades.map(function(x){  if(x<18){return x+4;}else{return x;} }));