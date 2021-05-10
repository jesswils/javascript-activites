// // for loop

// let favDrinks = [
//     "coke",
//     "irn-bru",
//     "fanta",
//     "orangina",
//     "appletiser"
// ]

// for(let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }

// // for loop with if statement

// let multiplesTwo = [];

// for (let i = 0; i < 20; i++){
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }
// console.log(`numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`)


// const sumOfNums = (min, max) => {
//     let sums = 0;
//     for(let i = min; i < max + 1 ; i++){
//         sums += i;
//     }
//     return sums;
// }

// console.log(`sum of all numbers from 1 to 20 is ${sumOfNums(1,20)}.`);

// // while loop

// let age = 15;

// while (age < 18) {
//     console.log("You're a young whipper snapper");
//     age++;
// }
// console.log("You're a real boy now!");

// // the same code but using a for loop

// // for( let age=15;age <18;age++) {
// //     console.log("You're a young whipper snapper");
// // }
// // console.log("You're a real boy now!");

// // caard game

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club"

// while (currentCard != "Spade") {
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

// --------------------

// Activity 1

// let favFilms = [
//     "Kill Bill",
//     "Django",
//     "Memento",
//     "The Hunt",
//     "Parasite"
// ]

// for(let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// favFilms.splice(6, "Matilda", 7, "Mrs. Doubtfire");

// console.log(favFilms);

// // Activity 2

// for(let i = 0; i < 6; i++){
//     console.log(Math.random() * 49 + 1);
// }

// // Activity 3

// for(let i = 9; i > -1; i--){
//     console.log(i);}


// Activity 4

// let favFilms = [
//     "Kill Bill",
//     "Django",
//     "Memento",
//     "The Hunt",
//     "Parasite"
// ]

// for(let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

//    if (favFilms.includes("Ghostbusters")){
//        console.log("Yeah, it's Ghostbusters!")
//    }
//    else {
//        console.log("Boo, it's not Ghostbusters")
//    };
  
// Activity 5

// for (let i = 0; i < 6; i++){
//     let randomNum = (Math.floor(Math.random() * 29 + 1))
//     if (randomNum % 7 === 0) {
//         console.log(`${randomNum} is divisible by 7!`)
//     }
//     else {
//         console.log(`${randomNum} is not divisble by 7`)
//     }
// };

// Activity 6

// do..while loop

// The do...while statement creates a loop that repeats a statment until the  test condition you have set is false.
// the below is a program to display numbers from 3-12 using a do...while statement 

// let i = 3;
// let n = 12;

// do {
//     console.log(i);
//     i++;
// } while(i <= n);

// for loop 
// For loops run through a block of code a specified number of times

// the below prints a sentence 5 times
// const j = 5;

// for (let i = 1; i <= j; i++) {
//     console.log(`Today is a good day.`);
// }

// While loop
// while loops, loop through a block of code for as long as the specified condition is true.

// the below loop starts at 1 and increments by + two until the count is less than 10 and then terminates
// let count = 1;
// while (count < 10) {
//     console.log(count);
//     count +=2;
// }

// The pros and cons between loops depends on the desired application, with another important factor being how long it takes to run the code (performance).
//  Through my own testing, it's easy to get stuck in an infite while loop whereas for loops are simpler in execution.
// However, through research it seems that do..while loops perform the best.
// ! important note in case of while loop, remember that the condition needs to be false at some point to not break the code.



// Activity 7

// let lowerNum = 1;

// let higherNum = 20;

// for (let i = lowerNum; i <= higherNum; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
    
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }