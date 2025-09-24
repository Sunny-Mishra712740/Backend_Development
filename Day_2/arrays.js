// arr = [1,2,3];

// console.log(typeof arr);

// arr1 = new Array();

// console.log(typeof arr1)


// arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// console.log(arr[0]);
// console.log(arr[11]);
// console.log(arr[20]);


// console.log(arr[-1]);


// Arrays are mutable. We can modify the arrays.

// arr[1] = 12;
// console.log(arr)


//Insert items in the arrays

// arr = [5,6,7,8,9,10];

// console.log(arr);

// arr.push(11);  - insert element from the last
// console.log(arr)

// arr.push(99,100,101);
// console.log(arr)

// // unshift method - insert element from the beggining

// arr.unshift(199);
// arr.unshift(99,100,101);

// console.log(arr);


// Removing elements

// pop method - remove element from the last

// arr = [5,6,7,8,9,10];

// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr);

// shift - remove elements from the beggining

// console.log(arr.shift());
// console.log(arr);


// concat

// let a1 = [1,2,3];
// let a2 = [4,5];

// let r = a1.concat(a2);
// console.log(r);


// length of an array

// console.log(a1.length)



// Convert array into strings

// chr_arr = ["V", "i", "s","h","w","a"];

// Join

// console.log(chr_arr.join())
// console.log(chr_arr.join(""))
// console.log(chr_arr.join("$"))

// console.log(typeof chr_arr.toString());


// Slicing of the arrays

// let num = [1,2,3,4,5,6,7,8,9,10,11,12,32,21,43,123,4321,314];

// console.log(num.slice(2));
// console.log(num.slice(2,7));
// console.log(num.slice(-2,11));
// console.log(num.slice(-2,-10));
// console.log(num.slice(-2,-10));


// Splicing , which modifies the given arrays

// let number = [1,2,3,4,5];

// let removed = number.splice(2,2,11,12,13,14);

// console.log(removed);
// console.log(number);


// Reverse a given array

// let nums = [1,2,3,4,5,6,7];
// nums.reverse()
// console.log(nums)


// let nums = [1,2,3,4,5,6,7];
// console.log(nums.indexOf(7));


// Sorting the array

let my_arr = [15,40,2,11,13];

// my_arr.sort();  // This will give you wrong answer

// my_arr.sort((a,b) => a-b);  // This will give you right answer
// console.log(my_arr);

my_arr.sort((a,b) => b-a);

console.log(my_arr)



