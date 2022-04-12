var reverseString = function (strng) {
    arr = [];
  if (typeof strng !== "string") {
    return "Enter correct value";
  }
  var newstrng = strng.split("");
  for (var i = newstrng.length - 1; i >= 0; i--) {
    const newarr = arr.push(newstrng[i]);
  }
     return newarr;
};
console.log(reverseString("Abhishek"));
