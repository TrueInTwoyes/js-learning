function checkLogin() {
    let login = prompt('Input your login', '');

    let message = (login == 'Сотрудник') ? 'Привет' :
        (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
        'Вас возможно не существует';
    alert(message);
}