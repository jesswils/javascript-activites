let space1 = "   " + "|  " + " | \n";
let space2 = " x " + "| o " + "| \n";
let space3 = "   " + "|  " + " | \n";
let line1 = "-----------\n";
let space4 = "   " + "|  " + " | \n" 
let space5 = " x " + "| x " + "| \n";
let space6 = "   " + "|  " + " | \n" 
let line2 = "-----------\n";
let space7 = "   " + "|  " + " | \n" 
let space8 = " o " + "|  " + " | \n" 
let space9 = "   " + "|  " + " | \n" 
let board = `${space1}${space2}${space3}${line1}${space4}${space5}${space6}${line2}${space7}${space8}${space9}`
console.log(board);

// if (space1 == "x" || space1 == "o"){
//     console.log("You've won!”")
//     }
//     else {
//     console.log("You are the weakest link!")
//     };

// if statement that checks for all possible conditions of winning, whether it’s across in one of the rows or columns, or diagonally

if (space1 == "x" || space1 == "o"){
    console.log("You've won!”")
}
else if (space2 == "x" || space2 == "o"){
    console.log("You've won!”")
}
else if (space3 == "x" || space3 == "o"){
    console.log("You've won!”")
}
else if (space4 == "x" || space4 == "o"){
    console.log("You've won!”")
}
else if (space5 == "x" || space5 == "o"){
    console.log("You've won!”")
}
else if (space6 == "x" || space6 == "o"){
    console.log("You've won!”")
}
else if (space7 == "x" || space7 == "o"){
    console.log("You've won!”")
}
else if (space8 == "x" || space8 == "o"){
    console.log("You've won!”")
}
else if (space9 == "x" || space9 == "o"){
    console.log("You've won!”")
}
else {
    console.log("You are the weakest link!")
    };