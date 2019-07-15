// var h1=document.querySelector("h1");
// h1.style.color="pink";


// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function(){
//     if(isBlue){
//         body.style.background ="white";
//     }
//     else{
//         body.style.background="#3498db";
//     }
//     isBlue=!isBlue;
// },1000)


//selector intro
// var tagID = document.getElementById("highlight");
// var tagClass = document.getElementsByClassName("bolded");
// var tagTag = document.getElementsByTagName("li");
// var tagSelector = document.querySelector(".bolded"); //select the first object with class name "bolded"
// var tagSelectorAll = document.querySelectorAll(".bolded"); //select all objects with class name "bolded"

//ways to select the first p tag
// var one = document.getElementById("first");
// var two = document.querySelector("#first");
// var three = document.querySelector(".special");
// var four = document.querySelector("p");
// var five = document.getElementsByClassName("special")[0];
// var six = document.getElementsByTagName("p")[0];
// var seven = document.querySelector("h1 + p");

var h1 = document.querySelector("h1");
// h1.style.color = "Blue";
// h1.style.border = "5px solid pink";
h1.classList.add("some-class");
h1.addEventListener("click", function(){
    alert("H1 was clicked!");
});
h1.addEventListener("click", function(){
    h1.style.background="orange";
});
var p = document.getElementsByTagName("p")[0];

var ul = document.querySelector("ul");
// ul.addEventListener("click", function(){
//     console.log("YOU CLICKED THE UL!");
// });

var lis = document.querySelectorAll("li");
for (var i = 0; i< lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color="pink";
    });
}

var button1 = document.querySelector("button");
var isPurple = false;
// button1.addEventListener("click",function(){
//     if (isPurple){
//         document.body.style.background = "white";
//        // isPurple = false;
//     }
//     else {
//         document.body.style.background = "purple";
//       //  isPurple = true;
//     }
//     isPurple = !isPurple;
// });

button1.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});

