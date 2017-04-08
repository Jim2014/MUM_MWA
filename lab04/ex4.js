var http=require('http');
var fs=require('fs');
var url=require('url');
var rx=require('rx');
var subject=new rx.Subject();

function doGet(data){
    var url_parts = url.parse(data.req.url,true);
    var path = url_parts.query.url;
    console.log(path);
    var readStream = fs.createReadStream(path);
    readStream.pipe(data.res);
    readStream.on('finish',()=>console.log('file retrieved successfully'));
    readStream.on('error',err=>{console.log(err);data.res.end('404 file not found');});
}

subject.subscribe(doGet);

http.createServer(function(req,res){
    subject.onNext({req:req,res:res});   
}).listen(4000);