//Sytax related

// console.log("hello)

// Runtime Exception

// let x = 5;
// console.log(x.toUpperCase());

// Logical 
// We should never divide by zero but js still gives you the answer.

// let num =5;

// for(i = -3; i<5; i++){
//     console.log(num/i)  // Logical error is dividing by zero
// }


// Try and catch method to handle exception

try{
 let obj = undefined;
 console.log(obj.name)

}catch(err){
    console.log("Exception handled")
    console.log(err)

}finally {
    console.log("i will always execute")
}