/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // first check if both of the strings are of the same length so that you don't have to waste          //space or time complexity 
    // iterate through the first string and store each letter into the table incrementing up
    // iterate through the second string and store each letter into the table decrementing down
    // if the counter ever goes below zero then return false
    if (s.length != t.length) {
        return false;
    }
    
    let table = {};
    for (let i = 0; i < s.length; i++) {
        table[s.charAt(i)]++;
    }
    for (let i = 0; i < t.length; i++) {
        table[t.charAt(i)]--;
        if (table[t.charAt(i)] < 0) {
            return false;
        }
    }
    return true;
}
