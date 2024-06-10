/* CAROLIINA ROJAS COLLANTE */
//Original:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//Después de la elevación:
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
var brendan;
brendan = 'super cool';
console.log(brendan); 