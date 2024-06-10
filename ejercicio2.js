/* CAROLIINA ROJAS COLLANTE */
//Original:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//Después de la elevación:
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle); 
}
var needle;
needle = 'haystack';
test();