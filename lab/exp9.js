
const strings = ["apple", "banana", "cherry", "date"];

const capitalizedStrings = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(capitalizedStrings);
