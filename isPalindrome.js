// Write your code below
function isPalindrome(string) {
  let compare = "";
  for (let i = string.length - 1; i > -1; i--) {
    compare += string[i];
  }
  if (compare === string) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("food"));
console.log(isPalindrome("fof"));
