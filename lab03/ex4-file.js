var fs=require('fs');

//exercise 1: print file size
var txt=fs.readFileSync('./CS572.txt');
console.log(txt.length);
console.log(txt);

//exercise 2: peint bytes 10 to 14
var buffer=new Buffer(5);
txt.copy(buffer,0,10,15);
console.log(buffer);

//exercise 3: Overwrite file
var msg='ABCDEFGHIJKLMNOPGRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
fs.writeFile('./CS572.txt', msg,'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
  append();
});
function append(){
    var msg1='abc';
    //exercise 4: append file
    fs.appendFile('./CS572.txt', msg1,'utf8', (err) => {
    if (err) throw err;
        console.log('The file has been appended!');
        replace();
    });
}

//exercise 5: change byte at pos 10 by '7'
function replace(){
    var txt2=fs.readFileSync('./CS572.txt','utf8');
    var newTxt=txt2.replaceAt(10,'7');
    fs.writeFile('./CS572.txt', newTxt,'utf8', (err) => {
        if (err) throw err;
        console.log('The replacement file has been saved!');
    });
}

String.prototype.replaceAt = function (index, char) {
 return this.substr(0, index) + char + this.substr(index + char.length);
}
