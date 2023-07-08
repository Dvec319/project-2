////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config(); // bring in our .enc vars
const express = require('express'); // web framework for node
const morgan = require('morgan'); // logger for node
const methodOverride = require('method-override'); // allows us to use PUT and DELETE methods
const gameRouter = require('./controllers/gameRoutes');
const userRouter = require('./controllers/user');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// express application
const app = express();

//////////////////////
// Declare Middleware
//////////////////////
app.use(morgan('dev')) // middleware for logging
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); // serve static files from public folder
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
}));
app.use('/games', gameRouter);
app.use('/user', userRouter);

///////////////////////
// Declare Routes and Routers
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

app.get('/', (req, res) => {
    res.render('index.ejs');
});


///////////////////////////
// Server Listener
///////////////////////////
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});