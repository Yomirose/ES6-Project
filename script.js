// let name = "John"
// console.log("Hello, my name is " + name);
// console.log(`Hello, my name is ${name}`);

// function chackAge(age){
//     if(age < 18){
//         return "User is less than 18 so is a minor";
//     }else {
//         return "User is more than 18 so is an adult";
//     }
// }
// console.log(chackAge(9));

// ternary operator
// function chackAge(age){
//     age < 18 ? console.log("User is less than 18 so is a minor") : console.log("User is more than 18 so is an adult");
// }
// chackAge(19);

// let a = 0;
// let result = (a === 0) ? "zero" : a > 0 ? "positive" : "negative";
// console.log(`The number is ${result}. `);

// const chackAge = (age) => {
//     if(age < 18){
//         return "User is less than 18 so is a minor";
//     }else {
//         return "User is more than 18 so is an adult";
//     }
// }
// console.log(chackAge(3));

// const Persons = [
//     {
//         name: 'Max'
//     },
//     {
//         name: 'Jack'
//     },
//     {
//         name: 'Mary'
//     }
// ];

// Using the find array PaymentMethodChangeEvent, log Jack, to the console

// const findPerson = () =>{
//     Persons.find((PersonObj)=>{
//         console.log(PersonObj);
//     });
// }
// findPerson();

// using the find array method, log Jack to the console
// const findPerson = (name) =>{
//     const result = Persons.find((person) => {
//         return person.name == name
//     });
//     console.log(result);
// }
// findPerson("Jack");

// const showName = () =>{
//     Persons.forEach((person) => {
//         console.log(person.name);
//     })
// }

// showName();


// const products = [
//     {
//         name:"Milk",price:15

//     }, 
//     {
//         name:"Water", price:9
//     }, 
//     {
//         name:"Bread", price:5
//     }
// ]

// const filterProducts = () =>{
//     return products.filter((product) => {
//         return product.price > 10;
//     })
// }
// console.log(filterProducts());


// MAP SECTIONS

// const products = [
//     {name: 'Milk', price: 15},
//     {name: 'Water', price: 9},
//     {name: 'Bread', price: 5 },
// ]

// const changePrice = (val) =>{
//     products.map((product) => {
//         console.log(product.price + val)
//     })
// }

// changePrice(9);

// let arrOfNum=[2, 3, 4, 3, 6];
// let sum =0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += number[i];
//   }
// console.log(sum);


// const anwser = arrOfNum.reduce((sum, currentValue) => {
//     sum = sum + currentValue;
//     return sum;
// })
// console.log(anwser)


// const products = [
//     {
//         name:"Milk",
//         price:15
//     }, 
//     {
//         name:"Water", 
//         price:9
//     }, 
//     {
//         name:"Bread", 
//         price:5
//     }
// ]

// const answer = products.reduce((sum, product) => {
//     sum = sum + product.price;
//     return sum;
// }, 0)

// console.log(answer);

// const objects = [
//     { x: 1 }, 
//     { x: 2 }, 
//     { x: 3 }
// ]

// const response = objects.reduce((sum, currentValue) => {
//     return sum + currentValue.x;
// }, 0);
// console.log(response);
    

// import {minus} from "./minus.js";
// import {sum} from "./sum.js";
// import {multiply} from "./multiply.js";
// import {divide} from "./divide.js";



// console.log(minus(4,1));
// console.log(sum(6,90));
// console.log(multiply(8,7));
// console.log(divide(8,3));

// const friendList = document.querySelector(".friends")
// console.log(friendList);

// const friendsArr = [
//     {name: "emmanuel", age: 20},
//     {name: "eno", age: 10},
//     {name: "sandra", age: 15},
//     {name: "roseline", age: 20},
//     {name: "akindele", age: 13},
//     {name: "babatola", age: 9},
// ]

// const nameList = friendsArr.map((friendObj) => {
    // console.log(friendObj.name)
    // insert the frienObj.name inside an li tag dynamically as a string
    // return `<li>${friendObj.name}</li>`;
// }).join("");

// friendList.innerHTML = nameList;


// Assignment
//  display each age and also display the sum of all the ages

// const friendAge = document.querySelector(".ages")
// console.log(friendAge);

// use map() method to diplay each age in the array
// const ageList = friendsArr.map((ageObj) => {
    // console.log(ageObj.age);
    // return `<li>${ageObj.age}</li>`;
// }).join("");
// friendAge.innerHTML = ageList;

// let sumAge = 0;
// use for loop to get the sum of all ages
// for (let i = 0; i < friendsArr.length; i++) {
    // sumAge += [i];
// }
// console.log(sumAge);



// Class Work
// const basket = [
//     { name: "apple", price: 20},
//     { name: "banana", price: 10},
//     { name: "orange", price: 15},
//     { name: "pineapple", price: 20},
//     { name: "watermelon", price: 13},
//     { name: "grape", price: 9},
// ]

//  use the find() method to log orange to the console
// const findOrange = (name) =>{
    // const orange = basket.find((orange) => {
        // return orange.name == name
    // });
    // console.log("orange");
// }
// findOrange("orange");

// use the forEach() method to log all the price to the console
// basket.forEach(priceList => {
    // console.log(priceList.price);
// });
 
// use filter() method to return all object with prices less than 15
// const filterBasket = () =>{
    // return basket.filter((baskets) => {
        // return baskets.price < 15;
    // })
// }
// console.log(filterBasket());

// use the reduce() method to add up all the price
// const response = basket.reduce((sum, currentValue) => {
    // return sum + currentValue.price;
// }, 0);
// console.log(response);

// use the map() method to subtract 5 from all the prices
// const changePrice = (value) =>{
    // basket.map((baskets) => {
        // console.log(basket.price - value)
    // })
// }
// changePrice(5);



// let student = {
//     state: {
//         lga: {
//             town: {
//                 street: {
//                     name: "1, Gomycode Street, Lagos"
//                 }
//             }
//         }
//     }
// }
// console.log(student.state.lga.town.street.name)

// to extract '1, Gomtcode street, Lagos' using object destructuring
// let {state: {lga: {town: {street: {name }}}}} = student;
// console.log(name)

// let object1 = {firstName: 'John', lastName: 'Brown'}
// let object2 = {age: 25}

// const newObject = {...object1, ...object2};
// console.log(newObject)

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// const newArr = [...arr1, ...arr2];
// console.log(newArr)


// Asychronous Programming

const friendList = document.querySelector(".friends");
const getFriends = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const friends = data.map((friendsObj) => {
            return `<li>${friendsObj.name}</li>`
        }).join("")
        friendList.innerHTML = friends;
    })
}
getFriends();

// Assignment

const friendEmails = document.querySelector(".emails");

const getEmails = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const emails = data.map((friends) => {
            return `<li>${friends.email}</li>`
        }).join("")
        friendEmails.innerHTML = emails;
    })
}
getEmails();


const friendWebsites = document.querySelector(".websites");

const getWebsites = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const websites = data.map((friends) => {
            return `<li>${friends.website}</li>`
        }).join("")
        friendWebsites.innerHTML = websites;
    })
}
getWebsites();
