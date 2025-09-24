// Asynchronous -> We dont have to wait until the current task got completed then only moves to the other one (Multitasking)

console.log("Hello from the first line");

setTimeout(() => {
    console.log("Hello form the call back fn")
},3000);

console.log("Hello from the last line");