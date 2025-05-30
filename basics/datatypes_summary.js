// 1.primitive :
//7 types: strings(""),number,boolean(true,false),null(empty), symbol(value unique banane k liye use hota hai),bigint(scientific values big values jo handle nhi hoti wo bigint me daldete h)

// javascript is dynamic type

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false //false
const outsideTemp = null //null
let userEmail;  //undefined
console.log(score);*/


//symbol:
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(anotherId === id); //false

const bigNumber = 76863846380448n  //last me n dalne par bigint /bignumber aajata h


//Reference type(non-primitive)
//~ basics types
//array,objects,functions

const cookie = ["bsf", "bruhh", "gp", "ET"]  //array

let myobj = {
  name: "tannu",  //datatype kuch bhi hoskta h string,number,boolean....
  age: 21,

} //object

const myfunction = function () {
  console.log("Anisha this side");
}

//console.log(typeof ...) //datatype pata krme k liye data likho typeof k bad..


// stack and heap

//stack(primitive) heap(non-primitive)