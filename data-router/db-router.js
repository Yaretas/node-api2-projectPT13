//Always import express
const express = require('express');

//Import the database
const db = require("../data/db.js");
//invoke the router (notice the "R" in router)
const router = express.Router();


//Create endpoints handlers -----------
// POST	/api/posts	Creates a post using the information sent inside the request body.
router.post('/', (req, res) => {});
// POST	/api/posts/:id/comments	Creates a comment for the post with the specified id using information sent inside of the request body.
router.post('/:id', (req, res) => {});
// GET	/api/posts	Returns an array of all the post objects contained in the database.
router.get('/', (req, res) => {
    db.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({
                error: "The posts information could not be retrieved."
            });
        })
});

// GET	/api/posts/:id	Returns the post object with the specified id.
router.get('/:id', (req, res) => {});
// GET	/api/posts/:id/comments	Returns an array of all the comment objects associated with the post with the specified id.
router.get('/:id', (req, res) => {});
// DELETE	/api/posts/:id	Removes the post with the specified id and returns the deleted post object. You may need to make additional calls to the database in order to satisfy this requirement.
router.delete('/:id', (req, res) => {});
// PUT	/api/posts/:id	Updates the post with the specified id using data from the request body. Returns the modified document, NOT the original.
router.put('/:id', (req, res) => {});


//Export Router
module.exports = router;