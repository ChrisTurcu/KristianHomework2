 //1 exercise

let admin;
let user = "Anna";
admin = user;
alert(admin);

// 2 exercise 

let user2 = "ivan";
let first = user2.slice(0,1);
let newUser = user.replace(first, first.toUpperCase());
console.log(newUser);

// 3rd exercise 

let test = 'I' ;
test += 'love' ;
test += 'Ukraine' ;
console.log(test) ;
alert(test.toUpperCase() );


const praise = "Ukraine is the best";
console.log(praise.length);

console.log(praise.toLowerCase());
console.log(praise.toUpperCase()); 
console.log(praise.indexOf("Best")); 
console.log(praise.includes("best"))

//4th exercise

let a = '';
let b = 'bbb';
let c = false;
let test1 = !b.length === c; // true 
console.log(test1);
//  let test2 = a.length > b.length; // false
// let test3 = !a.length && !b.length;  //false 
// let test4 = a === c; //false