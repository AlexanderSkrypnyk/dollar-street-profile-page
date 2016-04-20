var express = require('express');
var app = express();

var profile = {
  lastName: 'Kastrova',
  firstName: 'Boryna',
  country: 'Ukraine',
  visitedFamilies: 45,
  totalPhotos: 5874,
  totalVideos: 3,
  description: 'Some text about photographer ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius erat. Suspendisse ultricies laoreet diam eget pulvinar. Morbi imperdiet nibh purus, Some text about photographer ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius erat. Suspendisse ultricies laoreet diam eget pulvinar. Morbi imperdiet nibh purus ...'
};
var countries = [
  {countryName: 'Nigeria', families: [4], _id: 5},
  {countryName: 'Philippines', families: [1, 2], _id: 6},
  {countryName: 'China', families: [3], _id: 7}
];
var families = [
  {familyName: 'Pradas', income: 75, region: 'asia', _id: 1},
  {familyName: 'Shemede', income: 76, region: 'asia', _id: 2},
  {familyName: 'Alu\'s', income: 80, region: 'africa', _id: 3},
  {familyName: 'Shemede', income: 86, region: 'africa', _id: 4}
];

app.use(express.static('public'));

app.get('/photographer/profile', function (req, res) {
  res.json(profile);
});

app.get('/photographer/countries', function (req, res) {
  res.json(countries);
});

app.get('/photographer/families', function (req, res) {
  res.json(families);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

