/*
Challenge: Count the number of Duplicates:
....................................
Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. The input 
string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

Example:
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

/* ------------- SOLUTION------------------- */
// live solution link: https://replit.com/@rolandsankara/count-Duplicates


// create a function
function CountDup(input){
    // initialize an array for duplicates
    let dups = [];
    // initialize an object called "inputObj" to hold the chars as keys and an array of all their occurences as the value for each.
    let inputObj = {};
    // split the input string into an array called "inputArray"
    let inputArray = input.toLowerCase().split('');
  
    // Loop through the inputArray
    for(let char of inputArray){
      // if an element is a key in the "inputObj", then push the current iteration element into the array it array
      if(inputObj[char]){
        inputObj[char].push(char);
      }
      // else if an element is not a key in the "inputObject", then add that element as a key in the inputObj with a value of an array containing that element 
      else{
        inputObj[char] = [char];
      }
    }
  
    // when done looping through the inputArray, loop through the inputObj to find keys that have arrays(containing the elements occurence) whose length is greater than one.
    for(let element in inputObj ){
      if(inputObj[element].length > 1){
        dups.push(element);
      }
    }
  
    return dups.length;
  
  }
  
  CountDup("Indivisibilities")