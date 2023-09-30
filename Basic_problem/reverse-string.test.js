import {reverseString} from './reverse-string'
import {test,describe,it,expect} from 'vitest'


describe("reverse a string",()=>{
    const cases=[
        ['hello','olleh'],
        ['mango','ognam']
    ]
    cases.forEach(item=>{
        it(`it should return ${item[1]}, when you give ${item[0]}`,()=>{
            expect(reverseString(item[0])).toBe(item[1])
        })
    })
})

// test('Reversing a string', () => {
//     expect(reverseString('Hello')).toBe('olleH');
//     expect(reverseString('JavaScript')).toBe('tpircSavaJ');
//     expect(reverseString('12345')).toBe('54321');
//   });