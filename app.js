const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const port = 3000;

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.get('/', (req, res) => {
  res.render('index', {title: "home", bodyClass: "home-page"});
});

app.get('/beers', (req, res) => {
  punkAPI
    .getBeers()
    .then(beersFromApi => {
      //console.log(beersFromApi)
      console.log(beersFromApi)
      //res.render('beers', {beersFromApi, bodyClass: "beer-page", title: "beers"});
      res.render('beers', {beersFromApi, bodyClass: "beer-page", title: "beers"});
    })
    .catch(error => console.log(error));
});

app.get('/random-beer', (req, res) => {
  punkAPI
    .getRandom()
    .then(randomBeerFromAPI => {
      res.render('random-beer',{randomBeerFromAPI , bodyClass: "random-beer-page", title: "random-beer"});
    })
    .catch(error => console.error(error));
});

app.listen(port);