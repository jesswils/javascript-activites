if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}

let name = "Jess"
let age = "25"

if (age == "25" && name == "Jess") {
    console.log(true);
}
else {
    console.log(false);
}

const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}

let myage = "30"
let country = "UK"

if (myage > "17" && country == "UK") {
    console.log("Yes I can serve you")
}
else if (myage < "17" && country == "USA") {
    console.log("Sorry you aren't old enough")
}
else {
    console.log("Get out the shop!")
};

let topping = "pineapple"
let ingredient = "onions"

switch(topping) {
    case topping = "pineapple":
        console.log("This is an important ingredient for my pizza")
        break;
    case topping = "onions":
        console.log("I don't mind having ${ingredient} on my pizza")
        break;
    case topping = "sausage":
        console.log("I don't want this on my pizza")
};