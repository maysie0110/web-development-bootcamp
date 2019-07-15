// if(jQuery){
//     alert("jQuery is loaded");
// }
// else{
//     alert("jQuery not defined");
// }

// //select all divs and give them a purple background
// $("div").css("background","purple");

// //select divs with class "highlight" and make them 200px wide
// $(".highlight").css("width","200px");

// //select div with id "third" and give it a orange border
// $("#third").css("border","2px solid orange");

// //select the first div and changes its font color to pink
// $("div:first-of-type").css("color","pink");

$("img").css("width","300px");
$("img:first-of-type").attr("src", "https://bobandsuewilliams.com/images/golden-retriever-7.jpg");
$("img:last-of-type").attr("src", "https://bobandsuewilliams.com/images/golden-retriever-7.jpg");

$("h1").addClass("correct");
$("li:first-of-type").toggleClass("done");

// $("h1").click(function(){
//     alert("h1 clicked");
// });

$("button").click(function(){
    $(this).css("background","pink");
});

// $('input[type="text"]').keypress(function(){
//     console.log("You pressed a key");
// });

$('input[type="text"]').keypress(function(event){
    if(event.which === 13){ //users hit enter
        alert("You hit enter");
    }
});

$("h1").on("click", function(){
    $(this).css("color","purple");
});

$("button").on("mouseenter", function(){
    $(this).css("color","blue");
});
$("button").on("mouseleave", function(){
    $(this).css("color","black");
});

// $("img").fadeOut();

// $("button:first-of-type").on("click",function(){
//     $("img").fadeOut(1000, function(){
//         $(this).remove();
//     });
// })

// $("button:first-of-type").on("click",function(){
//     $("img").fadeToggle(1000); //fade in and out
// });


// $("img").css("display", "none");
// $("button:first-of-type").on("click",function(){
//     $("img").slideDown();
// });

$("button:first-of-type").on("click",function(){
    $("img").slideToggle(); //slide up and down
});