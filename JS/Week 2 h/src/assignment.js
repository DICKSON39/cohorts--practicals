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


//question 7
function longestCommonPrefix(strs) {
    // If the input array is empty, return an empty string
    if (!strs.length) return "";

    // Initialize the prefix as the first string in the array
    let prefix = strs[0];

    // Loop through the remaining strings in the array
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the current prefix
        while (!strs[i].startsWith(prefix)) {
            // Remove the last character from the prefix
            prefix = prefix.slice(0, -1);
            // If the prefix becomes empty, return an empty string
            if (!prefix) return "";
        }
    }
    
    // Return the longest common prefix
    return prefix;
}


console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    
console.log(longestCommonPrefix(["'interspecies", 'interstellar', 'interstate'])); 
console.log(longestCommonPrefix(["prefix", "prefixes", "preform"]));
console.log(longestCommonPrefix(["apple", "banana", "cherry"]));     



//Question 8
// Convert the input string to lowercase to ensure case insensitivity
s = s.toLowerCase();

// Check if the string is equal to its reverse
// Split the string into an array of characters, reverse the array, and join it back into a string
// Compare the original string with the reversed string
return s === s.split("").reverse().join("");

console.log(isCaseSensitive('Aba'));
console.log(isCaseSensitive('Racecar'));
console.log(isCaseSensitive('Palindrome'));
console.log(isCaseSensitive('Madam'))
console.log(isCaseSensitive('Hello'))


