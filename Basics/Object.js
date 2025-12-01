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
/*
we needed to define the 'mySym' and not the other properties because it's a computed/special key and not normal object key like others
JS converts normal ones into strings automatically. But Symbols can not be written as plain text keys. The square brackets mean 'use the 
variable value as the key, not the literal text'.
*/

// console.log(User.age)
// console.log(User["name"])

//Object.freeze(User)
User.age=45
User.greeting=function(){
    console.log(`hello, ${this.name}`)
}
//console.log(User)
console.log(User.greeting())