/**
Challenge: Disemvowel String:
....................................
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
**/

/* ------------- SOLUTION------------------- */
// live solution link: https://replit.com/@rolandsankara/Disemvowel

// Create a Function
function disemvowel(str) {
    // check if str is empty - if empty just end the program
    if(!str){
        return;
    }
    //create an array for the non vowel characters
    let nonVowelArray = []
    /*use a regular expression to get Vowels as we loop through
    the string that we are given*/
    for(let character of str ){
      if((/[aeiou]/ig).test(character) !== true ){
        // if a character is not a vowel, add it to the nonVowelArray
        nonVowelArray.push(character);
      }
    }
    // After looping through the str, then add join the novowelarray to form a string with non-vowels
    let newStr = nonVowelArray.join('');

  return newStr;
}