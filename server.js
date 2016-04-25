var express = require('express');
var app = express();

var profile = [{
  _id: 1,
  lastName: 'Kastrova',
  firstName: 'Boryna',
  country: 'Ukraine',
  places: [1, 3],
  description: 'Some text about photographer ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius erat. Suspendisse ultricies laoreet diam eget pulvinar. Morbi imperdiet nibh purus, Some text about photographer ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius erat. Suspendisse ultricies laoreet diam eget pulvinar. Morbi imperdiet nibh purus ...'
}];

var countries = [
  {countryName: 'Nigeria', families: [4], _id: 5},
  {countryName: 'Philippines', families: [1, 2], _id: 6},
  {countryName: 'China', families: [3], _id: 7}
];

var places = [
  {familyPhoto: '00', familyName: 'Pradas', income: 75, region: 'asia', country: '', _id: 1},
  {familyPhoto: '00', familyName: 'Shemede', income: 76, region: 'asia', country: '', _id: 2},
  {familyPhoto: '00', familyName: 'Alu\'s', income: 80, region: 'africa', country: '', _id: 3},
  {familyPhoto: '00', familyName: 'Shemede', income: 86, region: 'africa', country: '', _id: 4}
];

app.use(express.static('public'));

app.get('/photographer/profile', function (req, res) {
  res.json(profile);
});

app.get('/photographer/countries', function (req, res) {
  res.json(countries);
});

app.get('/photographer/places', function (req, res) {
  res.json(places);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

