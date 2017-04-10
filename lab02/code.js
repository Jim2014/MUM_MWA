var animal={
    classification:'classification',
    getClassification:function(){return this.classification}
}
function Bird(color,feather,wings,tail,fly="true",swim="true"){
    this.fly=fly;
    this.swim=swim;
    this.color=color;
    this.feather=feather;
    this.wings=wings;
    this.tail=tail;
}
Bird.prototype=animal;
Bird.prototype.getBirdDetails=function(){
    return{
        color:this.color,
        feather:this.feather,
        wings:this.wings,
        tail:this.tail,
        fly:this.fly,
        swim:this.swim
    };
}
var duck=new Bird("white","short feather","long wings","short tail");
console.log( duck.constructor);
console.log(animal.isPrototypeOf(duck));
console.log(duck.getBirdDetails());
console.log(duck.getClassification());