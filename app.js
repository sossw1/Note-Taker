// Dependencies
const express = require('express');

const app = express();
const PORT = 8080;

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});