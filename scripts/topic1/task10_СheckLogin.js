function checkLogin(){
    let login = prompt("Input your login", "");

    if (login === "admin"){
        let password = prompt("Input your password", "");
        if (password === "I'm boss"){
            alert("Hi!")
        } else if (password === "" || password === null){
            alert("Cancelled");
        } else {
            alert("Wrong password");
        }
    } else if (login === "" || login === null){
        alert("Cancelled");
    } else {
        alert("I don't know you");
    }
}