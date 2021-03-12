/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
  //replace any of the vowels with an empty string
  // learned this from theory of computation but basically this just replaces any of the letters in the language (which is aeiou) with an empty string thus removing all of the values :) 
   return s.replace(/[aeiou]/g, '') 
};

