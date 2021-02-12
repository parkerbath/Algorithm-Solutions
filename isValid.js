/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

/**
 * make a map of parenthesis making the open parenthesis as the key and the closing one as the    value
 * create an empty array using a stack
 * use a for loop to check the string one character at a time
    * if the character is an open bracket/parenthesis, then push it to the stack
    * if its a closing bracket, check the last entry in the stack 
    * if the that entry is an opening bracket of the same type, pop it from the stack
    * else, the string is not balanced
    * it should return an empty array if the string is balanced becuase they will have all been 
      popped
 */
    
  const characters = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  const stack = [];

  for (const paran of s) {
    if (characters.hasOwnProperty(paran)) {
      stack.push(paran)
    } else {
      const closeParan = stack.pop();
      if (paran !== characters[closeParan]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
    
