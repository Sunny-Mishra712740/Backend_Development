
const user = {
    name : "Sunny",
    age : 22,
    city : "Banglore",
};

// Accesssing the data

// console.log(user.name)
// console.log(user['name'])

// Adding data to the object

user.country = "India"
user["continent"] = "Asia";
// console.log(user)


//Deleting the keys and the object itself

// delete user.country
// console.log(user)

// delete user['continent']
// console.log(user)


// for(let key in user){
//     console.log(key, "=>", user[key])
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))

// Get both the keys and values

// console.log(Object.entries(user))


// Cloning an object using assign

const new_person = Object.assign({}, user)
console.log(new_person)

const new_person_1 = Object.assign({}, user, {role : "Developer"})
console.log(new_person_1);