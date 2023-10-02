function isPalindrome(word) {
  let backwards = word.split("").reverse().join("")
    return backwards === word
     
  // Write your algorithm here
  //write function that has 1 argument -  a string. the code checks if the string is a palindrome, meaning if you read it backwords it should look the same
  //and if it is palindrome function should return true and false if it's not.

}

/* 
  Add your pseudocode here
  function isPalindrome(word){
    let backwards = word.split("").reverse().join("")
    if (backwards === word) {
      return true
    } else {
      return false
    }
  }
*/

/*
  Add written explanation of your solution here
  split string to an array, so I can reverse it. use .join() to make it a string again.
  use "===" to return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("b"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(" "));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
