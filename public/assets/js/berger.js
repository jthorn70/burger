$(document).ready(function () {
    //your code here
  



$(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured")

    // console.log("The burger id is: " + id)
    // console.log("is it eaten? " +newDevoured)

    var newDevouredState = {
        devoured: newDevoured
    }

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(function() {
        console.log("Changed devoured to ", newDevoured);
        location.reload();
    })
});

$(".create-burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
    };

    // console.log(newBurger)
    $.ajax("/api/burgers",  {
        type: "post",
        data: newBurger
    }).then(
        function(){
            console.log("burger created")
            location.reload();
        }
    ) 
        
        
    
})



})




