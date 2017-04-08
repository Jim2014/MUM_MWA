var http=require('http');
var fs=require('fs');
var url=require('url')

http.createServer(function(req,res){
    var url_parts = url.parse(req.url,true);
    var path = url_parts.query.url;
    console.log(path);
    var readFile = new Promise(function(resolve,reject){
        var readStream = fs.createReadStream(path);
        readStream.pipe(res);
        readStream.on('finish',()=>resolve());
        readStream.on('error',err=>{reject(err);res.end('404 file not found');});
    });

    readFile.then(()=>console.log('file retrieved successfully'))
            .catch(err=>console.log(err));
    
}).listen(4000);

