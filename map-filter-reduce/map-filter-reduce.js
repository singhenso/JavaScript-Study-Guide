/* 
//////////////////////////////////////////////////////
Map function
//////////////////////////////////////////////////////
*/

const array = [1, 5, 6, 2, 24, 5, 6, 2, 6];

// loop through each value of the array. append the value in the array and multiply by 2

// for loop but lets create with map function
/*
const newArray = []
for (let i = 0;i < array.length; i++) {
  newArray.push(array[i] * 2);
}
*/

const newArray = array.map((number) => {
  return number * 2;
}); 
console.log(array);
console.log(newArray);

/* 
//////////////////////////////////////////////////////
Filter function

We want to loop through each element and keep only the elements below 5

// for loop solution
const array2 = [1, 5, 6, 2, 24, 5, 6, 2, 6];
const newArray2 = [];

for (let i =0;i < array2.length; i++) {
  if (array2[i] < 5 ) {
    newArray2.push(array2[i]);
  }
}

//////////////////////////////////////////////////////
*/

const array2 = [1, 5, 6, 2, 24, 5, 6, 2, 6];
const newArray2 = array.filter((number) => {
  return number < 5;
  // this is example of returning any number below 4
  // return number != 4;

})

console.log(array2)
console.log(newArray2) 

/* 
//////////////////////////////////////////////////////
Reduce Function


//////////////////////////////////////////////////////
*/

const array3 = [1, 5, 6, 2, 24, 5, 6, 2, 6];

// First way of doing this
// const newArray3 = array.reduce((total, number) => {
//   // we can add to the total which is an array already and pass a number: number variable
//   // The [] in the end means that the array is
//   return total.concat(`Number: ${number}`)
// }, [])

//console.log(newArray3);


const sum = array.reduce((sum, number) => {
 return sum + number
}, 0)

console.log(sum);
// This is the for loop
// const newArray3 = [];

// for (let i = 0; i < newArray3.length; i++) {
//   newArray.push(`Number: ${array3[i]}`)
// }


console.log(array3)
// This is for the first way at line 65
//console.log(newArray3);



const users = [
  {id: 1, name: "pedro", age: 26},
  {id: 2, name: "john", age: 22},
  {id: 3, name: "jessica", age: 56},
  {id: 4, name: "rio ferdinand", age: 126},
  {id: 5, name: "michael scott", age: 45},
];

// remove user pedro from array
const removeUser = (name) => {
  // new user array. we use filter in the array for current user in callback function
  // the only name we want to keep from array is name Pedro
  const newUserArray = users.filter((user) => {
    return user.name != name
  })

  return newUserArray;
}

//changeAge
const changeAge = (id, newAge) => {

  const newUserArray = users.map((user) => {
    if (user.id === id) {
      return {id: user.id, name: user.name, age: newAge};
    } else {
      return user;
    }
  });

  return newUserArray;
}

console.log(removeUser("pedro"))

// remove user with id 5

console.log(changeAge(5))