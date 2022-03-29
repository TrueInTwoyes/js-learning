function createAndModifyUserObject() {
    let user = new Object();

    user = {
        name: "Jhon",
        surname: "Smith",
    }
    alert("Created object user. \nName and Surname: " + user.name + " " + user.surname);
    user.name = "Pete";
    alert("Name changed. \nName and Surname: " + user.name + " " + user.surname);
    delete user.name;
    alert("Name deleted. \nName and Surname: " + user.name + " " + user.surname);
}
