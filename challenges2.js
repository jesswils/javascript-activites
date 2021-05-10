// Ticket machine

// let child = "17"
// let adult = "18"
// let senior = "60"

// if (child < "18") {
//     console.log("Ticket price is £8")
// }
// else if (adult > "18") {
//     console.log("Ticket price is £10")
// }
// else {
//     console.log("Ticket price is 7.50")
// };

// Coffee grinder

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) { 
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// };

// pressGrindBeans()


// Cash machine

// const cashWithdrawl = (amount, accountnum) => {
//     console.log(`Withdrawing ${amount} from ${accountnum}`);
// }

// cashWithdrawl(300, 44566789);


// Addition

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// // The below will work, but it will not show up in the console
// addUp (3,10)
// // The below will work and show up in the console 
// console.log(addUp(2,5));


// Temperature 

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFarenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// }; 

// console.log("The temperature is " + getFarenheit(15) + "F"); 


// Drinks order

// const coffeeOrder = (size, drinkType) => {
//     console.log(`Your order is: ${size} ${drinkType}`);
//     }
    
//     coffeeOrder("regular", "flat white");


// Factorial

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     }
//     else {
//         return (n * factorial (n-1));
//     }
// };
// console.log(factorial(33));

// ---------------------

// Challenge 1 - pizza order with two parameters and order count 

// let orderCount = 0;
// const takeOrder = (topping, sauce) => {
//     console.log(`Pizza with ${sauce} and ${topping}`);orderCount++;}
    
// takeOrder("tomato","pineapple");
// takeOrder("bbq","onions");
// console.log(orderCount)


// Challenge 2 - cash machine

// dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw.

// let showBalance = 300

// const getMoney = (accountBalance, pin, amount) => {
    
//     let pin = prompt ("Please insert your pin");

//     const options = () => {
//       let option = (prompt("What would you like to do? \n 1. Withdraw money \n 2. Show balance \n 5. Exit"));
//       switch (option) {
//               case 1:
//                 withdraw();
//                 break;
//               case 2:
//                 showBalance ();
//                 break;
//               case 3:
//                 alert("Goodbye");
//                 break;
//               default:
//                 alert("Please choose the correct option of 1, 2 or 3");
//                 options();
//                 break;
//       }
//     } 
    
//     //withdrawing money, prompting how much to withdraw
//     const withdraw = () => {
//       amount = prompt("How much money do you want to withdraw?"))
//       if (checkBalance(amount)) {
//         balance -= amount;
//         alert ("£" + amount + " withdrawn. Your balance is now £" + balance);
//         exitQ();
//       } else {
//         alert ("Insufficient funds.");
//         exitQ();
//       }
      
//     }
    
//     const showBalance = () => {
//       alert ("Your balance is now £" + balance);
//       exitQ();
//     }
//     }
//   getMoney();


// Arrays 

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Jess - Flat White",
//     "Charlie - Whatever's new"
// ];

// // to replace an item in the array 
// coffeeOrder[1] = "Ann - Cappuccino"
// console.log(coffeeOrder);

// Array length

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Jess - Flat White",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder.length);
 
// coffeeOrder.push("Donna - Americano");

// coffeeOrder.splice(1,2);

// console.log(coffeeOrder.slice(0)); - not sure if this is right 

// console.log(coffeeOrder);

// ---------------------------

// Activity 1

// let favSongs = [
//     "George Michael - Everything She Wants",
//     "Tame Impala - Posthumous Forgiveness",
//     "Big Society - My Love"
// ]

// console.log(favSongs)

// Activity 2

// let favWebsites = [
//     "https://developer.mozilla.org",
//     "apple.com",
//     "https://www.w3schools.com"
// ]
// // add two items to array by using .push() to find the index of an item 

// favWebsites.push("https://replit.com", "https://codereview.stackexchange.com");

// console.log(favWebsites);

// // remove last item from array using .pop()
// favWebsites.pop();

// console.log(favWebsites);

// Activity 3  .map() creates a new array populated with the results of calling the function (essentially like creating a copy to work from instead of permentantly altering the original array)

// let array1 = [
//    10,
//    11,
//    12,
//    13
// ];

// let map1 = array1.map(x => x * 2)

// console.log(map1);


// .shift() removes the first element from an array and returns that removed element

// let array2 = [
//    10,
//    11,
//    12,
//    13
// ];

// let firstElement = array2.shift();
// console.log(array2);

// unshift() method adds one or more items to the beginning of an array and returns the new length of the array.

// let array3 = [
//    15,
//    20,
//    122,
//    134
// ];

// console.log(array3.unshift(4));