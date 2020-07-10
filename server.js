const express = require("express");
// Set Handlebars.
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

// Import routes and give the server access to them.
const routes = require("./controllers/burgersController.js");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine('.hbs', exphbs({  defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
     // Log (server-side) when our server has started
    console.log(`App now listening at http://localhost:${PORT}`);
});