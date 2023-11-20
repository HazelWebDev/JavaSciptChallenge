// // Check if a string (first argument, str) ends with the given target string (second argument, target).


// //SOLUTION 1 (Declarative Approach)

// function confirmEnd(str, target) {
//     return str.slice(str.length - target.length) === target;

// }
// confirmEnd("Never give up and good luck will find you.", "Falcor");

// //First, use the slice method to copy the string
// //In order to get the last characters in str equal to the target's length, use the slice method
// //With the slice method, the first parameter is the starting index while the second is the ending index. For example, str.slice(10, 17) would be "e up and"
// //Only one parameter is inclded which it will copy everything from the starting index
// //Subtract the length of str and the length of target to get the last remaining characters equal to target's length
// //Compare the return result of slice to target and check if they have the same characters.


// //SOLUTION 2 (Regular Expression)

// function confirmEnding(str, target) {
//     let re = new RegExp(target + "$", "i") 
//     return re.test(str);
// }
// console.log(confirmEnding("Kristen", "n"))

// //Make a pattern from the target variable that exists at the end of the str
// //The variable 're' will change the pattern each tim,e the function is called, so use the constructor of the 
// //regular expression object 'new RegExp(pattern[, flags]), so start with 'nerw RegExp(target)
// //You have to check the end of the string, so concatenate the target variable with the $ character to match the end: 'new RegExp(target+'$')
// //Use the flag 'i' to ignore the case of the pattern and have our completed RegExp: new RegExp(target+'$','i')
// //finally, use the regular expression with the test method to the given string to check if the string ends with the 
// //pattern and return T or F 


// //SOLUTION 3 (Slice Method)

// function confirmEndings(str, target){
//     return str.slice(-target.length) === target
// }
// confirmEndings("Naruto", "o");