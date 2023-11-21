// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number. 

// function repeatStringNumTimes(str, num) {
//     let storageStr = ""; //empty string to store the repeated word
//     for (let i = 0; i < num; i++){ //loop to repeat code as many times as needed for according to num
//         storageStr += str; //add the string to the storageStr variable
//     }
//     return storageStr; //return the repeated word
//   }
  
//   repeatStringNumTimes("abc", 3);


  //SOLUTION 2 (Recursion) 
// function repeatStringNumTimes(str, num) {
//   if (num > 1) {
//     return ""; //if num is negative or 0, return an empty string
//   } else {
//     return str + repeatStringNumTimes(str, num - 1); //else add the string to the call of the function with num
//     //being decreased by 1, which will continously add another str until num is 1. 
//   }
// }


//SOLUTION 3 (Recursive)
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

