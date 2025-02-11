// QUESTION 1
function isPalindrome(str) {
    str = str.replace(/[\.|,|?|!| ]/g, "").toLowerCase()
    const reversedString = str.split("").reverse("").join("")
    return reversedString === str
}

console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat I saw'));
console.log(isPalindrome('Hello, World!'));


// QUESTION 2
function reverse(str) {
    return str = str.split('').reverse().join('');
}
console.log(reverse('Hello world!'));
console.log(reverse('A man, a plan, a canal, Panama'));
console.log(reverse('Was it a car or a cat I saw'));

//QUESTION 3
function lengthSubstring(s) {
    s = s.slice(0, 3)
    new_s=s.replace(/[\.|,|?|!| ]/g, "")
    ans= new_s.split("").join('')
    return ans
    
}

console.log(lengthSubstring('babad' ));
console.log(lengthSubstring('cbad'))

//QUESTION 4


function checkAnagramWithSort(str1, str2) {
    let newStr1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
    let newStr2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')

    return (newStr1 === newStr2)
  }

console.log(checkAnagramWithSort('Listen', 'silent'))
console.log(checkAnagramWithSort('Hello', 'World'))

//QUESTION6
function countPalindromes (word){
    str = word.replace(/[\.|,|?|!| ]/g, "").toLowerCase()
    const new_pad = str.split("").reverse("").join('')
     if(new_pad === word) {
        return new_pad.length
     }
     else{
        return new_pad.length
     }
}

console.log(countPalindromes('ababa'));
console.log(countPalindromes('racecar'));
console.log(countPalindromes('aabb'));
console.log(countPalindromes('a'))
console.log(countPalindromes('abc'))



