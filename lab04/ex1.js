var http=require('http');
var fs=require('fs');
var url=require('url')

http.createServer(function(req,res){
    var url_parts = url.parse(req.url,true);
    var path = url_parts.query.url;
    fs.createReadStream(path).pipe(res);
}).listen(4000);