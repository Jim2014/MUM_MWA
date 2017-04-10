var express = require('express');
var router = express.Router();

/* GET inventors page. */
router.get('/', function(req, res, next) {
    console.log('get /inventors');
    var tableRows='';
    for(const e of data){
        tableRows+=`<tr><td>${e.first}</td><td>${e.last}</td><td>${e.year}</td></tr>`
    }
    res.render('inventors', { tableRows: tableRows });
    //next();
});

module.exports = router;
const data=[
  {
    "first": "Albert",
    "last": "Einstein",
    "year": 1879
  },
  {
    "first": "Isaac",
    "last": "Newton",
    "year": 1643
  },
  {
    "first": "Galileo",
    "last": "Galilei",
    "year": 1564
  },
  {
    "first": "Marie",
    "last": "Curie",
    "year": 1867
  },
  {
    "first": "Johannes",
    "last": "Kepler",
    "year": 1571
  },
  {
    "first": "Nicolaus",
    "last": "Copernicus",
    "year": 1473
  },
  {
    "first": "Max",
    "last": "Planck",
    "year": 1858
  }
  
]