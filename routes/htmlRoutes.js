const path = require('path');

module.exports = function(app) {
    // GET Requests
    app.get('/notes', function(req,res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
}