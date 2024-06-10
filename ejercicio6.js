/* CAROLIINA ROJAS COLLANTE */
//Original:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);


//Después de la elevación:
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
var genre;
console.log(genre);
genre = "disco";
rewind();
console.log(genre); 