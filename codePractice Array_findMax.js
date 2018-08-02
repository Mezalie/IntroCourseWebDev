// Create a function named findMax which accepts one parameter: an array of numbers.
// In your function, find the maximum number inside the array.
// Return the result.



function findMax(testArray) {
    var maxVal = testArray[0]//starting on index 0 (first value)

    for (var arrayPosition = 1; arrayPosition < testArray.length; arrayPosition++) {
        if (testArray[arrayPosition] > maxVal) {
            maxVal = testArray[arrayPosition];
        }
    }
    
    return maxVal;
}
//THIS WORKS AS WELL. 

findMax([7, 15, 2, 0, 10, 3]);

findMax([-3, 6, 15, -20, 0, 00]);


function findMax(testArray) {
    return (Math.max.apply(null, testArray));
} //WORKS, but I feel like it won't pass all tests.