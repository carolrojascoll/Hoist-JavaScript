/* CAROLIINA ROJAS COLLANTE */
//Original
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; 
    }
    return dojo;
}



//Después de la elevación:
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        let = "closed for now"; 
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); 
console.log(makeDojo("Berkeley", 0)); 