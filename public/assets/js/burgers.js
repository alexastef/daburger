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
        // .catch((err) => alert("Ut oh! We couldn't add your burger to the list"));
    });

    // Devour burger and move it to Devoured Burgers Section




})

