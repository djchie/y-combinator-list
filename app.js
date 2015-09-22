// server.js

// BASIC SETUP
// =============================================================================

// This server will serve data and serve the index.html file

// Call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var db = require(__dirname + '/server/models/index');

var refreshData = false;
// Sync the database models
db.sequelize.sync({
  force: refreshData
}).then(function () {
  if (refreshData) {
    // Write all company data
    var companyData = require('./data.json');
    for (var i = 0; i < companyData.length; i++) {
      db.Company.findOrCreate({
        where: {
          name: companyData[i]['name'].toString(),
          websiteUrl: companyData[i]['websiteUrl'].toString(),
          crunchBaseUrl: companyData[i]['crunchBaseUrl'].toString(),
          angelListUrl: companyData[i]['angelListUrl'].toString(),
          status: companyData[i]['status'].toString(),
          cohort: companyData[i]['cohort'],
          year: companyData[i]['year'],
          exitValue: companyData[i]['exitValue'],
          colValue: companyData[i]['colValue'].toString(),
          fundingValue: companyData[i]['fundingValue'],
          description: companyData[i]['description'].toString(),
          imageUrl: companyData[i]['imageUrl'].toString()
        }
      }).spread(function (company, created) {
        if (!created) {
          console.log('Company ' + company['name'] + ' not created!');
        } else {
          console.log('Company ' + company['name'] + ' created!');
        }
      });
    }
  }
});


// Create an express app
var app = express();

app.use(express.static(__dirname + '/client'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// Configure the app to use bodyParser()
// This will let us get the data from post
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Set our port
var port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();

// All of our routes will console log a status
app.use(function (req, res, next) {
  console.log('==========================================');
  console.log(req.method + ': ' + req.url);
  next();
});

// Ideally, this route sends the index.html
router.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

// On routes that end in /companies
router.route('/companies')
  
  // GET /companies: return all companies
  .get(function (req, res) {
    var options = {};

    if (req.query.searchString !== '') {
      // options.status = req.query.statuses;

      options.$or = [
        {
          name: {
            $like: '%' + req.query.searchString + '%'
          }
        },
        {
          description: {
            $like: '%' + req.query.searchString + '%'
          }
        }
      ]
    }
    if (req.query.statuses) {
      options.status = req.query.statuses;
    }
    if (req.query.classes) {
      options.cohort = req.query.classes;
    }
    if (req.query.years) {
      options.year = req.query.years;
    }

    console.log(req.query);
    db.Company.findAll({
      where: options
    }).then(function (companies) {
      res.json(companies);
    });

  });


// REGISTER OUR ROUTES -------------------------------

// All of our routes will be prefixed with /api in the future when we want to build
// an api
// Right now, to retrieve products, the '/products' route handles getting products 
// and rendering the html
// Ideally, the '/products' route would make a call to the '/api/products' route
// which handles the databases interactions and retrieves data for the '/products'
// route to use to use the data to render
// app.use('/api', router);

// All of our routes will be prefixed with /
app.use('/', router);

// START THE SERVER
// =============================================================================

app.listen(port);
console.log('Magic happens on port ' + port);

// Refer to https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4 for help