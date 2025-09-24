// In a fuction if we pass fuction as a parameter(arguement) or return a fuction as its result is called as a higher order fuction

// function operation(operatorFn , a, b){

//     return operatorFn(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// let result = operation(add, 5,7)

// console.log(result)


function getGreetMethod(){
    return function(){
        console.log("Hello World")
    }
}

let greetFn = getGreetMethod()
console.log(typeof greetFn)

greetFn()


