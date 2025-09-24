// Synchronous / Blocking -> We have to wait until the current task got completed then only moves to the other one
// By default js is sychronous but it has the ability to run asynchronous operations


console.log("Hello from the first line")

function hello() {
    console.log("Hello from inside the function");
}

hello();

console.log("Hello from the last line")