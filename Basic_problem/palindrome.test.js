import {isPalindrome} from './palindrome'
import { describe,it,expect } from "vitest";
import style from 'ansi-styles'

describe('isPalindrome', () => {
    const cases =[
        ['121',true],
        ['abba',true],
        ['14321',false],
        ['A man, a plan, a canal, Panama',true]
       
    ]
    cases.forEach(item=>{
        it(
            `it should return ${style.green.open}${item[1]}${style.green.close}, when you give ${style.green.open} ${item[0]} ${style.green.close}`,
            ()=>{
            expect(isPalindrome(item[0])).toBe(item[1])
        })
    })
})
