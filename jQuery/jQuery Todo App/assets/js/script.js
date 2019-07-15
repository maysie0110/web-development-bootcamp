
//check off or uncheck specific todos by clicking
$("ul").on("click", "li", function(){ //.on account for the future element
    $(this).toggleClass("done");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });

    event.stopPropagation(); //stop event bubbling
});

//add new todo and hit enter
$('input[type="text"]').on("keypress", function(event){
    if(event.which === 13){//if enter is hit
        var newTodo = $(this).val();
        $(this).val(""); //clear the input box
        //create new li and add to ul
        $("ul").append("<li>"+ "<span><i class='fas fa-trash-alt'></i></span> "+ newTodo  + "</li");
    }
});

$(".fa-plus").click(function(){
    $('input[type="text"]').fadeToggle();
});