class Person {
    constructor(private _firstName: string = "") { }
    set firstName(val: string) {
        this._firstName = val;
    }
    get firstName() {
        return this._firstName;
    }
}

var person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);