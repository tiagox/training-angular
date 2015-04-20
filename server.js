var fs = require('fs'),
  express = require('express'),
  app = express(),
  advertisers = require('./data/advertisers.js');

app.use(express.static('public'));

app.get('/advertisers', function (req, res) {
    res.json(advertisers);
});

app.get('/advertisers/:id', function (req, res) {
  var id = req.params.id,
    advertiser = advertisers.filter(function (advertiser) {
      return advertiser.id == id;
    }).shift();

  res.send(advertiser);
});

var server = app.listen(8080, function () {
  var address = server.address();
  console.log('Advertisers API app listening at http://%s:%s', address.address, address.port);
});
