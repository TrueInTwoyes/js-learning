function tern_operator() {
let result;
let a = prompt('Input first number', '');
let b = prompt('Input second number', '');

result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);
}