// 1. Check String Input
function is_string(input) {
    return typeof input === 'string';
}
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false

// 2. Check Blank String
function is_Blank(str) {
    return str === '';
}
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false

// 3. String to Array of Words
function string_to_array(str) {
    return str.split(' ');
}
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// 4. Extract Characters
function truncate_string(str, num) {
    return str.slice(0, num);
}
console.log(truncate_string("Robin Singh", 4)); // "Robi"

// 5. Abbreviate Name
function abbrev_name(str) {
    let words = str.split(' ');
    return words.length > 1 ? words[0] + " " + words[1][0] + "." : str;
}
console.log(abbrev_name("Robin Singh")); // "Robin S."

// 6. Hide Email Address
function protect_email(email) {
    let [user, domain] = email.split('@');
    return user.slice(0, 5) + "...@" + domain;
}
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"

// 7. Parameterize String
function string_parameterize(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"

// 8. Capitalize First Letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('js string exercises')); // "Js string exercises"

// 9. Capitalize Each Word
function capitalize_Words(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"

// 10. Swap Case
function swapcase(str) {
    return str.split('').map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}
console.log(swapcase('AaBbc')); // "aAbBC"

// 11. Camelize String
function camelize(str) {
    return str.replace(/\s(.)/g, match => match.toUpperCase()).replace(/\s/g, '');
}
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"

// 12. Uncamelize String
function uncamelize(str, separator = ' ') {
    return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}
console.log(uncamelize('helloWorld')); // "hello world"
console.log(uncamelize('helloWorld','-')); // "hello-world"

// 13. Repeat String
function repeat(str, n) {
    return str.repeat(n);
}
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"

// 14. Insert in String
function insert(str, insertStr, position) {
    return str.slice(0, position) + insertStr + str.slice(position);
}
console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); 
// "We are doing some JavaScript exercises."

// 15. Humanize Format
function humanize_format(num) {
    let suffixes = ["th", "st", "nd", "rd"];
    let v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
console.log(humanize_format(301)); // "301st"

// 16. Truncate String with Ellipsis
function text_truncate(str, length, ending = "...") {
    return str.length > length ? str.slice(0, length) + ending : str;
}
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); 
// "We are doing !!"

// 17. Chop String into Chunks
function string_chop(str, size) {
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }
    return result;
}
console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]

// 18. Count Substring Occurrences
function count(str, subStr) {
    return str.toLowerCase().split(subStr.toLowerCase()).length - 1;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // Output: 2

// 19. Reverse Binary Representation
function reverse_binary(num) {
    return parseInt(num.toString(2).split('').reverse().join(''), 2);
}
console.log(reverse_binary(100)); // 19

// 20. Pad String to Length
function formatted_string(format, num, position) {
    let numStr = num.toString();
    return position === 'l' ? format.slice(0, -numStr.length) + numStr : numStr + format.slice(numStr.length);
}
console.log(formatted_string('0000', 123, 'l')); // "0123"
