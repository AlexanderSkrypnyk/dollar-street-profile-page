var express = require('express');
var app = express();

var profile = [{
  _id: 1,
  lastName: 'Kastrova',
  firstName: 'Boryna',
  country: 'Ukraine',
  places: [1, 3],
  photo: '/assets/images/layer-8.png',
  visitedFamilies: 45,
  totalPhotos: 5874,
  totalVideos: 3,
  description: 'Some text about photographer ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius erat. Suspendisse ultricies laoreet diam eget pulvinar. Morbi imperdiet nibh purus, Some text about photographer ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius erat. Suspendisse ultricies laoreet diam eget pulvinar. Morbi imperdiet nibh purus ...',
  organization: 'Cosmos',
  web: 'www.cosmos.com',
  facebook: '//www.facebook.com/boryanaKostova?fref=photo',
  twitter: '//twitter.com/bokatsarova',
  google: '//plus.google.com/102454573647937600319',
  linkedin: '//bg.linkedin.com/in/boryana-kostova-000bbb24'
}];

var countries = [
  {countryName: 'Nigeria', families: [4], _id: 6},
  {countryName: 'Philippines', families: [1, 2], _id: 7},
  {countryName: 'China', families: [3], _id: 8}
];

var places = [
  {familyPhoto: '/assets/images/layer-10.png', familyName: 'Pradas', income: 75, region: '/assets/images/asia.png', country: 'Philippines', _id: 1},
  {familyPhoto: '/assets/images/layer-16.png', familyName: 'Shemede', income: 76, region: '/assets/images/asia.png', country: 'Philippines', _id: 2},
  {familyPhoto: '/assets/images/layer-12.png', familyName: 'Alu\'s', income: 80, region: '/assets/images/asia.png', country: 'China', _id: 3},
  {familyPhoto: '/assets/images/layer-13.png', familyName: 'Shemede', income: 86, region: '/assets/images/africa.png', country: 'Nigeria', _id: 4},
  {familyPhoto: '/assets/images/layer-14.png', familyName: 'Dudakova', income: 96, region: '/assets/images/europe.png', country: 'Ukraine', _id: 5}
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

