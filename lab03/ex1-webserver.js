var http=require('http');
var fs=require('fs');

function websvr1(){
    http.createServer(function(req,res){
        var img=fs.readFileSync('./image.jpg');
        res.end(img);
    }).listen(8081,'127.0.0.1');
}

function websvr2(){
    http.createServer(function(req,res){
        fs.createReadStream('./image.jpg').pipe(res);
    }).listen(8082,'127.0.0.1');
}

websvr1();    //client spend 2.54s to open the picture
websvr2();    //client begin to display part of picture after 700ms