#The Big O Notation
Is a way to measure the code quality based on Space Complexity and Time Complexity.
The question that needs to be made once we start thinking about Big O is:
<em>When we grow bigger and bigger with our input, how much our function slow down?</em>



#The Most Common Big O Notations

-O(n) -> It means Linear Time, the input and the number of operations increase proportionally (i.e. one loop);

-O(1) -> It means Constant Time, no matter how big our input is, only one operation will be executed;

-O(n^2) -> It means Quadratic Time, the number of operations increases quadratically compared to the number of inputs (i.e. nested loops);

-O(n!) -> It means Factorial Time, if you are in this scenario, it is better for you to rethink about it (i.e. one nested loop for each element);

#The Four Rules:

-Worst Case: We always consider the worst case scenario when talking about the Big O Notation

-Remove Constants: We don't consider constants unless it is O(1), O(n^2), O(2^n)

-Different terms for input -> Caution with different inputs (i.e. we have two loops for different arrays, one loop is for an array A and the other one for an array B, in this case we have a O(a + b) notation.

-Drop Non Dominant -> Imagine we have a loop in an array and, after it, we have a nested loop. In that case, our Big O Notation will only consider the nested loop, so instead of beign O(n + n^2) it is only O(n^2).
