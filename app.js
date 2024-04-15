#! /usr/bin/env node
//Tas# 34
// Pizzas: Think of atleat 3 kind of your favourite pizza. store these pizza name in a array.
// The name of each pizza.
// Modify you for loop to print a sentence using the name of pizza instead of printing just the name of pizza, for each
// pizza you should have one line of output containing a simple statement like pepporoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. the output should consist
// of these or more line  about the kinds of pizza you like and then additional sentence, such as I really love pizza! 
let favourite_pizza = ["Pepporoni", "Chicken", "Veg"];
for (let pizza of favourite_pizza) {
    console.log(pizza);
}
console.log("\n");
for (let pizza of favourite_pizza)
    console.log(`I really like ${pizza} pizza!`);
console.log("\n I really love pizza!");
export {};
