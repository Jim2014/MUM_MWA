//execise 1
var buffer=new Buffer(100);
for(var i=0;i<100;i++){
    buffer[i]=i;
}
console.log(buffer);

//execise 2
var slice=buffer.slice(40.60);
console.log(slice);

//execise 3
var bufferCopy = new Buffer(20);
buffer.copy(bufferCopy,0,40,60);
console.log(bufferCopy);