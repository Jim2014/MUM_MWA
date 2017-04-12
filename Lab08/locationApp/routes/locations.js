var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/lab08", { native_parser: true });
db.bind('locations');
db.locations.createIndex({ name: 1 }, { unique: true });
//db.locations.createIndex({ location: '2d' });


router.get('/', function (req, res, next) {
    res.render('locations');
});

router.get('/search', function (req, res, next) {
    console.log(req.query);
    var ret = db.locations.find({ location: { $near: [req.query.curLong, req.query.curLat] } }).limit();
    console.log(ret);
    res.send(ret);
});

router.post('/', function (req, res, next) {
    var data = {
        name: req.body.name,
        category: req.body.category,
        location: [req.body.longitude, req.body.latitude]
    };
    console.log(data);
    db.locations.insert(data, function (err, result) {
        console.log(result);
        res.send(result);
    });


});

router.put('/', function (req, res, next) {
    var data = req.body;
    db.locations.update({ name: data.name }, data, { strict: false }, function (err, result) {
        console.log(result);
        res.send(result);
    });
});

router.delete('/', function (req, res, next) {
    var data = req.body;
    db.locations.remove({ name: data.name }, data, function (err, result) {
        console.log(result);
        res.send(result);
    });
});

module.exports = router;
