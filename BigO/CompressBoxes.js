function compressBoxesTwice(boxes) {
    boxes.forEach(boxes => {
        console.log(boxes)
    });

    boxes.forEach(boxes => {
        console.log(boxes)
    });
}

// O(2n) -> O(n)
compressBoxesTwice();

function compressBoxesTwiceWithTwoInputs(boxes, boxes2) {
    boxes.forEach(boxes => { // O(a) -> Inputs in the first array
        console.log(boxes)
    });

    boxes2.forEach(boxes => { // O(b) -> Inputs in the second array
        console.log(boxes)
    });
}

// O((a + b)
compressBoxesTwiceWithTwoInputs()


function compressBoxesTwiceWithTwoInputsNested(boxes, boxes2) {
    boxes.forEach(boxes => { // O(a) -> Inputs in the first array
        console.log(boxes)
        boxes2.forEach(boxes => { // O(b) -> Inputs in the second array
            console.log(boxes)
        });
    });


}

//O(a * b)
compressBoxesTwiceWithTwoInputsNested()