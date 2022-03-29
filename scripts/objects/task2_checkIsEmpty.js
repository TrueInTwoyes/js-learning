function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true;
}

function checkIsEmpty() {
    let schedule = {};
    alert("Object schedule is empty: " + isEmpty(schedule));
    
    schedule["8:30"] = "get up";
    alert("Modify object schedule is empty: " + isEmpty(schedule));
}
