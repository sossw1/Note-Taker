let noteData = require('../db/db.json');

module.exports = function(app) {
    // API GET Requests
        //GET "/api/notes" gets all notes from db
        app.get('/api/notes', function(req,res) {
            res.json(noteData);
        });

    // API POST Requests
        //POST "/api/notes" saves a note to db given data (note)
        app.post('/api/notes', function(req,res) {
            let newNote = req.body;
            console.log(newNote);
            noteData.push(newNote);
            res.json(newNote);
        });

    // API DELETE Requests
        //DELETE "api/notes" deletes a note from the db given id (url encoded)

}
