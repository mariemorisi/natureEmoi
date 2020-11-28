require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
    secret: 'mdp',
    resave: true,
    saveUninitialized: true
}));

// on importe le router
const router = require('./app/router');
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('integration'));

app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
