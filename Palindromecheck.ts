function palindrom ( str : String) : String {
    let strng = str.split("")
    for(let i=strng.length-1; i>=0; i--){ 
            if(strng[i] ==strng[strng.length - i - 1]){
                return "It is Paindrome";
            } return "not Palindrome";
     }
   }
console.log(palindrom("MADAM"));