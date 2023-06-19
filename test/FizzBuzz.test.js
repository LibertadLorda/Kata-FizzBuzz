/*import { sum } from "../src/scripts/Example";

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
        
    });
});
*/

const FizzBuzz = require('../src/scripts/FizzBuzz');

describe ("Kata Fizzbuzz", () => {
    test('Devuelve "FizzBuzz" al ser múltiplo de 3 y de 5', ()=>{
        
        expect(FizzBuzz(15)).toBe("FizzBuzz");
    })
 
    test('Devuelve "Fizz" al ser múltiplo de 3', ()=>{
        
        expect(FizzBuzz(6)).toBe("Fizz");
    })

    test('Devuelve "Buzz" al ser múltiplo de 5', ()=>{
        
        expect(FizzBuzz(10)).toBe("Buzz");
    })

    test('Devuelve el número sino es múltiplo de 3 ni de 5', ()=>{
        
        expect(FizzBuzz(2)).toBe(2);
    })
})