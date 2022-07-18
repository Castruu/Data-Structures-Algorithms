function printAllNumbersThenAllPairsSums(numbers) {
    console.log('These are the numbers: ')
    numbers.forEach(number => { // O(n)
        console.log(number);
    }) 

    console.log('These are the pair sums: ') 
    numbers.forEach(firstNumber => { // O(n)
        numbers.forEach(secondNumber => { // O(n)
            console.log(firstNumber + secondNumber);
        })
    }) // O(2 ^ n)
}

 // O(n  + n^2) ->  O(2 ^ n)
printAllNumbersThenAllPairsSums([1, 2, 3, 4, 5])