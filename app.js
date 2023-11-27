const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();
const port = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:
hbs.registerPartials(path.join(__dirname, "views/partials"));
// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index', {title: "home"});
});

app.get('/beers', (req, res) => {
  res.render('beers', {title: 'beers'});
});

app.get('/random-beer', (req, res) => {
  res.render('random-beer',{title: "random-beer" });
});

app.listen(port, () => console.log(`🏃‍ on port ${port}`));
