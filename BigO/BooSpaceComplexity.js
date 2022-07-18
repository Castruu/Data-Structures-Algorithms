function booo(n) {
    for(let i = 0; i < n.length; i++) { // Space Complexity O(1)
        console.log('Boooooo!')
    }
}


// O(1)
booo([1, 2, 3, 4, 5])

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for(let i = 0; i < n; i++) { // Space Complexity O(1)
        hiArray[i] = 'Hi'; // Space Complexity O(n)
    }
    return hiArray;
}

//O(n + 1) -> O(n)
arrayOfHiNTimes(6)