let numbers;
let verifier = 0;
let myArrey = [];

for (let i = 0; i < 6; i++){
    numbers = parseInt(prompt('inserisci un numero'));

    if(numbers % 2 == 0) {
        console.log ('pari', numbers);
    }
    else if(numbers % 2 == 1){
        valid = 1;
        console.log('dispari', numbers);
        parseInt(myArrey.push(numbers));
    }
}

console.log('myArrey', myArrey)