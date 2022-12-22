/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

*/

function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

// example 2
//test
console.log(shortcut('test'));

function shortcut2 (string) {
  return string
    .split('')
    .filter(str => !'aeiou'.includes(str))
    .join('')
}

// test
console.log(shortcut2('lambda'))

// example 3
function shortcut3(string){


  let newString = string.replace(/[aeiou]/g, '')
  return newString

 
 }
 console.log(shortcut3('test'))
 // test 3
