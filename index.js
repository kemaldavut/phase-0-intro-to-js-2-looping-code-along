// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
let cards = []
for (let i = 0; i < names.length; i++) {
cards.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`)
}
return cards
}

function countDown(numbers){
    while (numbers >= 0){
        console.log(numbers);
        numbers--;
    }
}
countDown(10);