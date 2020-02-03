const reverseString = function(word) {
  
    let splitString   = word.split("");
    let reverseString = splitString .reverse();
    return reverseString.join("");
}

module.exports = reverseString
