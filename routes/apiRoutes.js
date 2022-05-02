const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const notes = require('../db/db.json');

// Get Notes
router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if(err) res.sendStatus(404);
        console.log(data);
        res.json(JSON.parse(data));
        console.log(process.cwd());
    })
});

// Post Notes
router.post('/notes', (req,res) => {
    const newNotes = req.body;
    newNotes.id = uuidv4();
    let readData = (path.join(__dirname, ('../db/db.json', "utf8")));
    notes.push(newNotes);

    fs.writeFile('../db/db.json', JSON.stringify(notes), err => {
        if(err) { res.sendStatus(404);
        } else {
            console.log('Note Saved');
        }
    })
    res.json(readData);
});

// Delete Note
router.delete('/notes/:id', (req, res) => {
    let saveNotesId = req.params.id;
    let readData = (path.join(__dirname('../db/db.json', "utf8")));

    let findData = readData.filter(note => note.id.length !== note)
});

module.exports = router;