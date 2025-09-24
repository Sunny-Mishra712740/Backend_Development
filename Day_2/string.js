// String - Sequence of character

let name = "Sunny";

let city = "Mumbai";

// console.log(name, city);
// console.log(typeof name);


// Accessing character based on index

// console.log(name[3]);

// console.log(name[0]);

// Strings are immutable because

// 1. It can be used to store sensitive information like password
// 2. If there is highly concurrent situation it's better to use string
//    as it cannot be changed without acknowledgement (easy to handle)
// 3. It saves space.

// length of a string

// console.log(name.length);

let first_name = "Sunny";
let last_name = " Mishra";

let full_name = first_name.concat(last_name);

// console.log(full_name);
// console.log(first_name + last_name);


// Upper and Lower case

// console.log(full_name.toLowerCase());
// console.log(full_name.toUpperCase());


// Character at any index str[i]

// console.log(name.charAt(3));


// Slicing

// console.log(full_name);
// console.log(full_name.slice(2));
// console.log(full_name.slice(2,5));
// console.log(full_name.slice(-5));
// console.log(full_name.slice(-5,-1));


// indexOf

console.log(name.indexOf("y"))

// trim

let a = "Sunny Mishraaa";

console.log(a.trim());

// split

 name = "Aman Mishra"

 console.log(name.split(""));

