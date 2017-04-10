var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const FilePath = path.join(__dirname,'infor.txt');


var data = [];
/* GET contactus page. */
router.get('/', function(req, res, next) {
    console.log(FilePath);
    var text = '[]';
    try{
        text=fs.readFileSync(FilePath)||"[]" ;
    }
    catch(err){
        console.log(err);
    }
    data = JSON.parse(text);
    //console.log(data);
    res.render('contactus',{data:data,errors:null});
});

router.post('/', function(req, res, next) {
    req.checkBody('fullname','Full name is required').notEmpty();
    req.checkBody('message','Message is required').notEmpty();

    var errors = req.validationErrors();
    if(errors) {
        var errs={};
        for(var e of errors){
            if(e.param == 'message') errs.msg = e.msg;
            else
                errs.name = e.msg;
        }
        console.log(errs);
        res.render('contactus',{data:data,errors:errs});
    }
    else{
        var msg = req.body;
        msg.ip = req.ip;
        console.log(msg);
        data.push(msg);
        fs.writeFile(FilePath,JSON.stringify(data),err=>{
        if(err) console.log(err);
        console.log('save file success');
        });
        res.render('thankyou', {fullname:msg.fullname});
    }

    
});

module.exports = router;