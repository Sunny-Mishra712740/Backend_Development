

function abc (){

    let myPromise = new Promise (function(resolve, reject){
        let a = 1;
        if(a > 0){
            resolve("success")
        }
        else {
            reject("failure")
        }
    })

    document.getElementById("myId").innerHTML = myPromise
    
    // myPromise.then(() => console.log(value)).catch((error) => console.log(error))
}


