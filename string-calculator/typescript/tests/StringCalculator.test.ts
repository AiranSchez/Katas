import { add } from "../src/StringCalculator"

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