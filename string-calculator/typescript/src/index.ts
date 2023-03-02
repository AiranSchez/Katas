export const add = (numbers: string): number => {
    const isNumberEmpty = numbers === ''
    if (isNumberEmpty) return 0

    const operators = numbers.split(',')
    if (operators.length === 1) return Number(numbers)

    const sum = Number(operators[0]) + add(operators.slice(1).join(','))
    return sum
}
