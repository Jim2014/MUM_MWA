var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    console.log(res.body);
    var txt=JSON.stringify(req.body);
    fs.writeFile('req.txt',txt,'utf8',err=>{
        if(err) throw err;
        console.log('file have been saved');
    })
}).listen(4000);