// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

/*create a new, empty array to hold the messages;

iterate through the input array and, inside the loop, build out the 
'thank you' message for each name using string interpolation, 
then add that message to the new array you created;

after the loop finishes and all of the messages have been added to 
the new array, return the new array.
*/

function writeCards(name, event) {
let completedCards = [];
for (let i = 0; i < name.length; i++) {
        completedCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return completedCards;
}

function countDown() {
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}