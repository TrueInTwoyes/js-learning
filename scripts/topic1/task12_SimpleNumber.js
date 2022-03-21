function simple_number(){
let number = prompt("Input number more than 1", "");

next:
for (let i = 2; i <= number;i++){
    for (j = 2; j < i; j++) {
        if (i % j == 0){ 
            continue next;
        }
    }
    alert(i);
}
}