var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.listen(8000,()=>console.log('listen port 8000'));

app.get('/', function (req, res) {
    MongoClient.connect('mongodb://127.0.0.1:27017/lib07',(err,db)=>{
        if(err) throw err;
        db.collection('homework7').findOne({},(err,doc)=>{
            res.send(decrypt(doc.message));
        });
    });
    
});

function decrypt(encrypted){
    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes256', 'asaadsaad');

    let decrypted = '';
    decipher.on('readable', () => {
    const data = decipher.read();
    if (data)
        decrypted += data.toString('utf8');
    });
    decipher.on('end', () => {
        console.log(decrypted);
    });

    decipher.write(encrypted, 'hex');
    decipher.end();
    return decrypted;
}