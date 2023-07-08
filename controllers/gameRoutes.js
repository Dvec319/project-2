////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express');
const Game = require('../models/videogame');

const router = express.Router();

///////////////////////
// Declare Routes and Routers
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

// Index
router.get('/', async (req, res) => {
    const allGames = await Game.find({})

    res.render('games/index.ejs', {games: allGames})
});

// New
router.get('/new', (req, res) => {
    res.render('games/new.ejs')
});

// Delete
router.delete('/:id', async (req, res) => {
    await Game.findByIdAndDelete(req.params.id);
    res.redirect('/games')
})

// Update
router.put('/:id', async (req, res) => {
    await Game.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/games');
})

// Create
router.post('/', async (req, res) => {
    await Game.create(req.body);
    res.redirect('/games');
})

// Edit
router.get('/:id/edit', async (req, res) => {
    const game = await Game.findById(req.params.id);
    res.render('games/edit.ejs', {game})
})

// Show
router.get('/:id', async (req, res) => {
    const chosenGame = await Game.findById(req.params.id);
    console.log(chosenGame)

    res.render('games/show.ejs', {game: chosenGame})
});

module.exports = router;