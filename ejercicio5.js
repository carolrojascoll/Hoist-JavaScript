/* CAROLIINA ROJAS COLLANTE */
//Original:
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//Después de la elevación:
var mean;
mean(); 
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food); 
    food = "fish";
    console.log(food); 
}
console.log(food);