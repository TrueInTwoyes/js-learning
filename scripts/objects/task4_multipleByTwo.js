
function multiplyNumeric() {
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    alert("Parametrs for menu \nWidth = " + menu.width + "\nheight = " + menu.height + "\nTitle = " + menu.title)


    for (let value in menu) {
        if (typeof menu[value] == 'number') {
            menu[value] *= 2;
        }
    }

    alert("Multiplied by two menu parametrs (only numbers) \nWidth = " + menu.width + "\nheight = " + menu.height + "\nTitle = " + menu.title)
}