////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config(); // bring in our .enc vars
const express = require('express'); // web framework for node
const morgan = require('morgan'); // logger for node
const methodOverride = require('method-override'); // allows us to use PUT and DELETE methods
const Game = require('./models/videogame')

// express application
const app = express();

//////////////////////
// Declare Middleware
//////////////////////
app.use(morgan('dev')) // middleware for logging
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); // serve static files from public folder

///////////////////////
// Declare Routes and Routers
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

// Index
app.get('/games', async (req, res) => {
    const allGames = await Game.find({})

    res.render('games/index.ejs', {games: allGames})
});

// New
app.get('/games/new', (req, res) => {
    res.render('games/new.ejs')
});

// Show
app.get('/games/:id', async (req, res) => {
    const chosenGame = await Game.findById(req.params.id);

    res.render('games/show.ejs', {game: chosenGame})
});

///////////////////////////
// Server Listener
///////////////////////////
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});