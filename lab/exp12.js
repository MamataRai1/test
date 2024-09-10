const str = ["web", "dsa", "math", "english", "operating System", "April","Array"];

const filteredArray = str.filter(function (str) {
    return str[0] == 'A';
});

console.log(filteredArray);