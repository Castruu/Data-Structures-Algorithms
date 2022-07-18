function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]) // O(1)

    var middleIndex = Math.floor(items.length / 2); 
    var index = 0;

    while(index < middleIndex) { 
        console.log(items[index]); // O(n / 2)
        index++; 
    }

    for (let index = 0; index < 100; index++) { 
        console.log('Hi') // O(100)
    }
}

// O(n/2 + 101) -> O(n + 1) -> O(n) 