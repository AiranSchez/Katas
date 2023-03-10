import {add} from "../index"
// Metodo add(string a) -> Te devuelve en un entero la suma de lo que le pases por string
// Solo puede ser separado con , y puede tener hasta 2 numeros en string
// Si le pasas un string vacío te devuelve un 0

//----------- input ----- output
// Case 1 ->   ""           0
// Case 2 ->   "1"          1
// Case 3 ->   "3"          3
// Case 4 ->   "1,1"        2

describe('string claculator', () => {
    it('should return zero if input string is empty', () => {
        expect(add('')).toBe(0)
    })
    it('should return parsed unique integers', () => {
        expect(add('1')).toBe(1)
    })
    it('should return parsed unique decimals', () => {
        expect(add('1.1')).toBe(1.1)
    })

    it('should return the sum of two the numbers delimited by a sepator', () => {
        expect(add('7,14')).toBe(21)
    })
    it('should return the sum of the  undefined amount of numbers of the input', () => {
        expect(add('1,2,2')).toBe(5)
    })
})