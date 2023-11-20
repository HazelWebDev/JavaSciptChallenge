//problem stmt: Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.


// starting code: 
// function largestOfFour(arr) {
//     return arr;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//SOLUTION 1 (Procedural Approach)

// function largestOfFour(arr) {
//    const results = [] //need a place to store it
//    for (let i = 0; i < arr.length; i++){ //outer loop to iterate through the array
//     let largestNumber = arr[i][0]; //second variable to hold the largest num and initialize it with the first num.
//     //it must be outside the inner loop so it will not be reassigned until we find a larger number.
//     for (let j = 0; j < arr[i].length; j++){
//         if (arr[i][j] > largestNumber) { //check if the element of the subarray is llarger than the currently stored latest number
//             largestNumber = arr[i][j]; //save the largest number in the corresponding position inside of the results array. 
//         }
//     }
//     results[i] = largestNumber; //return the array
//    }
//    return results;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//SOLUTION 2 (Declarative Approach)

// function largestOfFour(arr) {
//     return arr.map(function(group) { //map all items to the main array
//         return group.reduce(function(prev, current) { //reduce the contents down to a single value using reduce
//             return current > prev ? current : prev; //comparison between the current and previous values, 
//             //if the current value is higher than the prev, we set it as the new previous value for comparison
//             //with the next item within the array, or returns it to the map methods callback if its the last item.
//         });
//     });
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//SOLUTION 3 (Recursive Approach)

// function largestOfFour(arr, finalArr = []) {
//     return !arr.length ? finalArr : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
// }