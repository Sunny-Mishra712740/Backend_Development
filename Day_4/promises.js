// Promise from sunny
// Promises is an object in js that represent the eventual completion (or failure) of an ashychronous operation.
// Promises in not present in others langauge because they have many threads they can work ashychronously by defalut.

// const sunnyPromise = new Promise((resolve, reject) => {
    
//     let parentDecision = false;

//     if(parentDecision) {
//         resolve("Yayy, ab shaadi ki tayyari karo", parentDecision)
//     }else{
//         reject("Papa ne IAS dhoond lia hai !, Sorry.....", parentDecision)
//     }
// });


// sunnyPromise.then((msg , parentDecision) => {
//     console.log("Sunny Message : ", msg);
//     console.log("parent decision was", parentDecision);
//     console.log("Let's book the wedding venue")
// }).catch((msg) => {
//     console.log("Sunny  Message :", msg)
//     console.log("parent decision was", parentDecision)
//     console.log("Tinder kahan ho yaar !")

// }).finally(() => console.log("Chalo life me clearity mili"));


// const f1Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(Math.random() > 0.5) {
//             resolve(" Friend 1 : Hey i am in for Goa")
//         }else{
//             reject("Friend 1 : Sorry mujhe pw skills ke live sessions karne ho !")
//         }
//     })
// },3000)
// const f2Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(Math.random() > 0.5) {
//             resolve(" Friend 2 : Hey i am in for Goa")
//         }else{
//             reject("Friend 3 : Sorry mere pet me dard ho rha hai !")
//         }
//     })
// },2000)

// const f3Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(Math.random() > 0.5) {
//             resolve(" Friend 3 : Hey i am in for Goa")
//         }else{
//             reject("Friend 3 : Sorry mujhe pw skills ke live sessions karne ho !")
//         }
//     })
// },1000)

// Promise.all([f1Promise,f2Promise,f3Promise]).then((msg) => {
//     console.log(msg);
//     console.log("Yay you are going goa")
// }).catch((msg) => {
//     console.log(msg)
//     console.log("Yaar band karo goa ka plan banana!")
// })



const g3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve(" Friend 1 : Hey i am in for Goa")
        }else{
            reject("Friend 1 : Sorry mujhe pw skills ke live sessions karne ho !")
        }
    })
},3000)
const g2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve(" Friend 2 : i,ll be there")
        }else{
            reject("Friend 3 : Sorry mere pet me dard ho rha hai !")
        }
    })
},2000)

const g1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve(" Friend 3 : Hey i am not available")
        }else{
            reject("Friend 3 : Sorry mujhe pw skills ke live sessions karne ho !")
        }
    })
},1000)

Promise.any([g1Promise,g2Promise,g3Promise]).then((msg) => {
    console.log(msg);
    console.log("Yay you are going goa")
}).catch((msg) => {
    console.log(msg)
    console.log("Yaar band karo goa ka plan banana!")
})


