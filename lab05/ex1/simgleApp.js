var express = require('express');
var app = express();

app.listen(8000,()=>console.log('listen port 8000'));

app.get('/inventors', function (req, res) {
    var tableRows='';
    for(const e of data){
        tableRows+=`<tr><td>${e.first}</td><td>${e.last}</td><td>${e.year}</td></tr>`
    }
    var html = `
    <html><head><style>td{border:1px solid;} </style></head>
    <body><table>
    <tr><td>first</td><td>last</td><td>year</td></tr>
    ${tableRows}
    </table>
    </body></html>
    `
    res.send(html);
});

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
