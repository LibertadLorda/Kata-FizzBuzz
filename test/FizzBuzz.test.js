/*import { sum } from "../src/scripts/Example";

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
        
    });
});
*/

const FizzBuzz = require('../src/scripts/FizzBuzz');

describe ("Kata Fizzbuzz", () => {
    const resultado=FizzBuzz();
    test('Devuelve el número sino es múltiplo de 3 ni de 5', ()=>{
        const num = resultado.split("\n").map(Number);
        expect(num.length).toBe(101);
    })

    test('Devuelve "FizzBuzz" al ser múltiplo de 3 y de 5', ()=>{
        
        expect(resultado.split("\n")[14]).toBe("FizzBuzz");
    })
 
    test('Devuelve "Fizz" al ser múltiplo de 3', ()=>{
        
        expect(resultado.split("\n")[2]).toBe("Fizz");
    })

    test('Devuelve "Buzz" al ser múltiplo de 5', ()=>{
    
        expect(resultado.split("\n")[4]).toBe("Buzz");
    })

    
})