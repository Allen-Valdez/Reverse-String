//Reverse a string with built-in functions
const reverseString = (str) => {
  /*The split method splits a string object into an array of string 
  by separating the string into sub strings.*/
    var splitString = str.split('');
  /*The reverse method reverses an array in place. The first array
  element becomes the last and the last becomes the first */
    var reverseArray = splitString.reverse();
  /* The join method joins all elements of an array into a string */
    var joinArray = reverseArray.join('');
  /* Returns joinArray which contains the reversed string */
    return joinArray;
};
console.log(reverseString('What'));

//OR

//If you want to be fancy and one line it
const reverseStringTwo = (str) => {
  return str.split('').reverse().join('');
}
console.log(reverseStringTwo('Hello'))

//Reverse a string with a decrementing for loop
const stringReverse = str => {
  /*First I will create an empty string that will contain the new 
  created string */
  var newString = '';
  /*After that I will create a FOR LOOP which will start at the last 
  character of the string. */
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // or newString = newString + str[i];
  }
  /*Then we will return the reversed string */
  return newString;
};

console.log(stringReverse('Today'));

//Reverse a string with Recursion

const reversedString = (str) => {
  if (str === '')
    return '';
  else
    return reversedString(str.substr(1)) + str.charAt(0);
};

console.log(reversedString('This'))
