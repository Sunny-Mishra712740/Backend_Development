// Read from an external file

const fs = require("fs")

// console.log(typeof fs)

// Read in a sync way

// console.log("Before starting to read")

// const content = fs.readFileSync("./Day_5/input.txt")

// console.log("Output content is :" + content)
// console.log("Last Line");

// Reading in a async way

// fs.readFile('./Day_5/input.txt',(err, content)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log("Content of the file is :"+ content)
// })

// console.log("Last line")


// Write to code to write to an external file

// console.log("Before")

// fs.writeFileSync('output1.txt', 'Hello Students!')

fs.writeFile('output2.txt', "Hello student again !", err => {
    if(err){
        return console.log(err)
    }
    console.log('Written Successfully !')
})


console.log("After")

