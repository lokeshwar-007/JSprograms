console.log("OBJECT NOTATIONS")
function getPerson(name,age){
    let details = {
        name : name,
        age : age
    };
    return details;
}
let person = getPerson("Dhoni",21);
console.log(person)
let car = {
    brand : "BMW",
    model : "new",
    hp : "400 kmph"
}
console.log(car.brand)