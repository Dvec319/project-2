const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

router.post('/signup', async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(15));
        await User.create(req.body);
        res.redirect('/user/login');
    } catch {
        res.send('There was an error, please try again.')
    }
});

router.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
        res.send("This user doesn't exist. Please try again.")
    } else {
        const passwordMatch = bcrypt.compareSync(req.body.password, user.password);
        if (passwordMatch) {
            req.session.username = req.body.username;
            req.session.loggedIn = true;
            res.redirect('/games');
        } else {
            res.send('Sorry that was the wrong password. Try again.')
        }
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/')
    })
});

module.exports = router