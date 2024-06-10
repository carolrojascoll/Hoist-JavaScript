/* CAROLIINA ROJAS COLLANTE */
//Original:
var food = 'chicken';
console.log(food);
eat();
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}

//Después de la elevación:
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); 
    food = 'gone';
}
var food;
food = 'chicken';
console.log(food); 
eat();