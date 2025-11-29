//Singleton

//Object literals

const mySym=Symbol("key1")
const User={
    name:"potata",
    age:32,
    holidays:['Sunday','Saturday'],
    "email":"abc@gmail.com",//can't be accessed using '.(dot)'
    [mySym]:"myKey1"
}

// console.log(User.age)
// console.log(User["name"])

//Object.freeze(User)
User.age=45
User.greeting=function(){
    console.log(`hello, ${this.name}`)
}
//console.log(User)
console.log(User.greeting())