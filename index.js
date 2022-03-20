 //1 exercise

let admin;
let user = "Anna";
admin = user;
alert(admin);

// 2 exercise 

let user = "ivan";
let first = user.slice(0,1);
let newUser = user.replace(first, first.toUpperCase());
console.log(newUser);

// 3rd exercise 

let test = 'I' ;
test += 'love' ;
test += 'Ukraine' ;
//console.log(test) ;
alert(test.toUpperCase() );

// let str = 'love is in the air'
// let target = 'is'; 

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  alert( `Found at ${foundPos}` );
  pos = foundPos + 1;

  // exercise 4 

let a = '';
let b = 'bbb';
let c = false;
let test1 = !b.length === c; // true 
let test2 = a.length > b.length; // false
let test3 = !a.length && !b.length; // false 
let test4 = a === c; // false 