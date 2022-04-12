//Step-1 Take the string input from function.
//Step-2 split the string into array.
//Step-3 Iterate the loop from reverse.
//Step-4 Apply condition to check whhether last and first element is same or not.
//Step-5 Return the result.

function palindroma(str) {
  var strng = str.split("");
  for (var i = strng.length - 1; i >= 0; i--) {
    if (strng[i] === strng[strng.length - i - 1]) {
      return "It is Paindrome";
    }
    return "not Palindrome";
  }
}
console.log(palindroma("MADAM"));
