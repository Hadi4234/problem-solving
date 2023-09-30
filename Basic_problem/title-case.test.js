import { it,describe,expect } from "vitest";


function titleCase(str) {

 // Split the string into an array of words
  const words = str.toLowerCase().split(' ');

  // Loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join the array of words into a string and return it
  return words.join(' ');
  
}


describe("titleCase",()=>{
    const cases=[
        ['hello world','Hello World'],
        ['mango','Mango'],
    
    ]
    cases.forEach(item=>{
        it(`it should return ${item[1]}, when you give ${item[0]}`,()=>{
            expect(titleCase(item[0])).toBe(item[1])
        })
    })
})

