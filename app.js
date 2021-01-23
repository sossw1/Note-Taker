// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Paths
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});