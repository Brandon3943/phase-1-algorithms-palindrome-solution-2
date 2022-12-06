function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length / 2; i++) {
    let j = word.length - 1 - i;

    if (word[i] === word[j]) {
      return true;
    } else {
      return false;
    }
  }
}


/* 
  Add your pseudocode here
  first letter is the same as the last, return true.... second letter same as second to last... so on and so on. 
  only looping half way through this time.
*/

/*
  Add written explanation of your solution here
  takes word[i] and checks the first half of the word to the middle, and then takes word[j] and take the back half of the word to the middle.
  if back half and front half are the same, returns turn
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
