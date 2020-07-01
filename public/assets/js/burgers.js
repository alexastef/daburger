// All the frontend JS
const addBtn = $("#submitBtn");
const devourBtn = $("#devourBtn");

$(function() {
    // Add a new burger on submit
    $(".addBurger").on("submit", (event) => {
        event.preventDefault();

        let newBurger = { 
            burger_name: $("#burger").val().trim()
        }
        console.log(newBurger);

        // If the burger name is not an empty string
        if (newBurger.burger_name != "") {
            // Make POST request to API, adding new burger to the database
            $.ajax("/api/new", {
                type: "POST",
                data: newBurger
            })
            .then(() => {
                console.log("Added a new burger!");
                location.reload();
            })
            // If an error is received, alert error - check this code
            .catch((err) => {
                console.log(err);
                alert("Ut oh! We couldn't add your burger to the list");
            })
        // Otherwise alert user that the burger must have a name
        } else { alert("Burger must have a name")}
    });

    // Devour burger and move it to Devoured Burgers Section
    $(".devourBtn").on("click", (event) => {

        let clickedId = event.target.id;

        $.ajax(`/api/burgers/${clickedId}`, {
            type: "PUT",
        })
        .then(() => {
            console.log("Devoured a burger!");

            location.reload();
        })
    })

})

