// 

// async function getMessage() {
//     return "Hello Students"
// }

// getMessage().then(result => console.log(result))

// console.log("First line")
// async function getMessage() {
//     setTimeout(() => {
//         console.log("Hello Students")
//     }, 3000)
// }
// getMessage().then(result => console.log(result))

async function printHelloAfterWait(){
    console.log('First line')

    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Students")
        },3000)
    })

    let result = await data     // Start waiting for the data promise t be completed
    console.log(result)
    console.log('Last line')
}

printHelloAfterWait()

console.log("Hello from end")
console.log('THis is the last line of code')



