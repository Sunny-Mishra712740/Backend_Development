// A closure is  created when a function "remembers" the variables from its lexical scopes
// even after the outer function has finished executing

// A closure gives you access to an outer funcion's variables from an inner function, even after the outer function is gone 

// function hello(){
//     let name = "Vishwa"
//     console.log(name)
// }

// hello()

// console.log(name)


// function outerFn(){
//     let outerVar = "I am from the outer fn";
//     function innerFn(){
//         console.log(outerVar)
//     }

//     return innerFn
// }


// let fn = outerFn()

// fn()

function customerCounter(){
    let count = 0;
    return function(){
        count++
        console.log("New customer count is", count)
    }
}


let counter = customerCounter();

counter()
counter()
counter()

