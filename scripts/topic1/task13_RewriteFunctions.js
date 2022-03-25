function checkAgeTern(age){
    age = prompt("Input your age", "");
    return (age > 18) ? true : confirm("Do you have parent access?"); 
}

function checkAgeLogic(age){
    age = prompt("Input your age", "");
    return (age > 18) || confirm("Do you have parent access?");
}
