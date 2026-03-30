const fs = require('fs');

const trips = JSON.parse(
  fs.readFileSync('./data/trips.json', 'utf8')
);

const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    trips: trips,
    homeClass: '',
    travelClass: 'selected',
    homeFooterClass: '',
    travelFooterClass: 'active'
  });
};

module.exports = {
  travel
};