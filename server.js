const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();
const handlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

// Serve static content from public folder
app.use(express.static("public"));

// Parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up handlebars
app.set("view engine", "handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));

app.use(routes);

// Start server and begin listening to client requests
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})


