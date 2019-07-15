// // alert("Hello from the JS File");

// // prompt asks user for some input
// var userFirst = prompt("What is your first name?");
// var userLast = prompt("What is your last name?");
// var userAge = prompt("What is your age?");

// // alert users through a pop-up message
// alert("Your full name is " + userFirst + " " + userLast);
// alert("Your age is " + userAge);

// // console.log prints something to the console
// console.log("Your full name is " + userFirst + " " + userLast);
// console.log("Your age is " + userAge);

// var userAge = prompt("What is your age?");
// var date;
// date = userAge * 365.25;

// alert(userAge + " years is roughly " + date + " days");

// var age = Number(prompt ("What is your age?"));


// if (age < 18){
//     console.log("Sorry, you are not old enough to enter the venue.");
// }
// else if (age < 21){
//     console.log ("You can enter, but cannot drink");
// }
// else {
//     console.log("Come on in. You can drink.");
// }

// if (age < 0){
//     console.log ("Error. Invalid age.");
// }
// if (age === 21) {
//     console.log ("Happy 21st birthday!");
// }
// if (age % 2 === 1){
//     console.log ("Your age is odd!");
// }
// if (age % Math.sqrt(age) === 0){
//     console.log ("Your age is perfect square");
// }

// simple guessing game
// var num = 7;
// var guess = Number(prompt("Guess a number!"));

// if (guess === num) {
//     alert("You guessed it!");
// }
// else if (guess < num){
//     alert("Too low. Try again");
// }
// else {
//     alert("Too high. Try again");
// }

// while loops problem set
// print all numbers between -10 and 19
// var count1 = -10;
// console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")
// while (count1 <= 19){
//     console.log(count1);
//     count1++
// }

// //print all event numbers between 1- and 40
// var count2 = 10;
// console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
// while (count2 <= 40){
//     console.log(count2);
//     count2+=2;
// }

// //print all odd numbers between 300 and 333
// var count3 = 300;
// console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
// while (count3 <= 333){
//     console.log(count3+1);
//     count3+=2;
// }

// //print all numbers divisible by 5 AND 3 between 5 and 50
// var count4 = 5;
// console.log("PRINT ALL NUMBERS DIVISIBLE by 5 and 3 BETWEEN 5 AND 50")
// while (count4 <= 50){
//     if (count4 % 5 === 0 && count4 % 3 === 0){
//         console.log(count4);
//     }
//     count4++;
// }

//Annnoy-omatic
// var ans = prompt("Are we there yet?");

// while (ans.indexOf("yes") === -1 && ans.indexOf("yeah") === -1){
//     ans = prompt("Are we there yet?");
// }
// alert("Yay, we finally made it!!");


// for loops problem set

// // print all numbers between -10 and 19
// console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")
// for ( var i = -10; i <= 19; i++){
//     console.log(i);
// }

// //print all event numbers between 1- and 40
// console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
// for (var i = 10; i <= 40; i+=2){
//     console.log(i);
// }

// //print all odd numbers between 300 and 333
// console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
// for (var i = 300; i <= 333; i+=2){
//     console.log(i+1);
// }

// //print all numbers divisible by 5 AND 3 between 5 and 50
// console.log("PRINT ALL NUMBERS DIVISIBLE by 5 and 3 BETWEEN 5 AND 50")
// for (var i = 5; i <= 50; i++){
//     if (i % 5 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// }

// //Functions Problem Set
// function isEven(x){
//     var ans = false;
//     if( x % 2 === 0){
//         ans = true;
//     }
//     return ans;
// }

// function factorial(x){
//     var ans;
//     if(x === 0){
//         ans = 1;
//     }
//     else{
//         ans = x* factorial(x-1);
//     }
//     return ans;
// }
// function kebabToSnake(myStr){
//     var newStr = myStr.replace(/-/g, "_");
//     return newStr;
// }


//if you want to be able to access the todos variable from 
//the chrome developer console then you'll need to put it 
//in the global scope,
//var todos = [];

//This gives the HTML a half second to load before running 
//the JS, which circumvents the issue of the prompt function 
//blocking the HTML from loading right away.
// window.setTimeout(function() {
//     // put all of your JS code from the lecture here
//     var input = prompt("What would you like to do?");

//     while (input !== "quit"){

//         if(input === "new"){
//             addTodo();
//         }

//         else if (input === "list"){
//            listTodo();
//         }

//         else if (input === "delete"){
//             deleteTodo();
//         }

//         input = prompt("What would you like to do?");
//     }
//     console.log("OK, You quit the app");
//   }, 500);

//   function addTodo(){
//     var newItem = prompt("Enter a new todo");
//     todos.push(newItem);
//     console.log(newItem + " was added to the list");
//   }

//   function listTodo(){
//     console.log("***********");
//     todos.forEach(function(item, index){
//         console.log(index + ": " + item);
//     });
//     console.log("***********");
//   }

//   function deleteTodo(){
//     var index = prompt("Enter index of todo to delete");
//     todos.splice(index,1);
//     console.log("Todo removed");
//   }

//Array Problems Set
// printReverse
// function printReverse(array){
//     for (var i = array.length -1; i >= 0; i--){
//         console.log(array[i]);
//     }
// }

// // isUniform - returns true if all elements in the array are identical
// function isUniform(array){
//     var firstItem = array[0];
//     for (var i = 1; i < array.length; i++){
//         if(array[i] !== firstItem){
//             return false;
//         }
//     }
//     return true;
// }

// //return the sum of all numbers in the array
// function sumArray(array){
//     var sum = 0;
//     array.forEach(function(element){
//         sum += element;
//     });
//     return sum;
// }

// // return the maximum number in the array
// function max(array){
//     var max = array[0];
//     array.forEach(function(element){
//         if(element > max){
//             max = element;
//         }
//     });
//     return max;
// }

//movieDB

// var movie = [
//     {
//         title: "In Bruges",
//         rating: 5,
//         hasWatched: true
//     },
//     {
//         title: "Frozen",
//         rating: 4.5,
//         hasWatched: false
//     },
//     {
//         title : "Mad Max Fury Road",
//         rating : 5,
//         hasWatched : true
//     },
//     {
//         title: "Les Miserable",
//         rating : 3.5,
//         hasWatched : false
//     }
// ]

// movie.forEach(function(mov){
//     if(mov.hasWatched === true){
//         console.log("You have watched \"" + mov.title + "\"" + " - "+mov.rating + " stars");
//     }
//     else{
//         console.log("You have not watched \"" + mov.title + "\"" + " - "+mov.rating + " stars");
//     }
// });


//JS Methods
var obj={
    name:"Chuck",
    age :45,
    isCool: false,
    friends:["bob", "tina"],
    add: function(x,y){ //methods of an object
        return x+y;
    }
}
var comments ={};
comments.data =["Good Job!", "bye", "Lame..."];

// function print(arr){
//     arr.forEach(function(el){
//         console.log(el);
//     });
// }

comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    });
}