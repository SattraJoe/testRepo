var titleStr = 'This is 10 JavaScript array methods you should know';
    titleStr += '\n@JS_array_methods_you_should_know.js';
    titleStr += '\n=====================\n';
console.log(titleStr);
console.log('forEach()\n');
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(item => {
	console.log(item); // output: 1 2 3 4 5 6
})
console.log('\n=====================\n');
console.log('includes()');
console.log(arr.includes(2)); // output: true
console.log(arr.includes(7)); // output: false
console.log('\n=====================\n');
console.log('filter()');
const filtered = arr.filter(num => num > 3);
console.log(filtered); // output: [4, 5, 6]
console.log(arr); // output: [1, 2, 3, 4, 5, 6]
console.log('\n=====================\n');
console.log('map()');
const oneAdded = arr.map(num => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]
console.log(arr); // output: [1, 2, 3, 4, 5, 6]
console.log('\n=====================\n');
console.log('reduce()');
const sum = arr.reduce((total, value) => total + value, 0);
console.log(sum); // 21
console.log('\n=====================\n');
console.log('some()');
// at least one element is greater than 4?
const largeNum = arr.some(num => num > 4);
console.log(largeNum); // output: true

// at least one element is less than or equal to 0?
const smallNum = arr.some(num => num <= 0);
console.log(smallNum); // output: false
console.log('\n=====================\n');
console.log('every()');
// all elements are greater tahn 4
const greaterFour = arr.every(num => num > 4);
console.log(greaterFour); // output: false

// all elements are less than 10
const lessTen = arr.every(num => num < 10);
console.log(lessTen); // output: true
console.log('\n=====================\n');
console.log('sort()');
const alpha = ['e', 'a', 'c', 'u', 'y'];
// sort in descending order
descOrder = arr.sort((a, b) => a > b ? -1: 1);
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// sort in ascending order
ascOrder = alpha.sort((a, b) => a > b ? 1: -1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
console.log('\n=====================\n');
console.log('Array.from()');
const name = 'frugence';
const nameArray = Array.from(name);
console.log(name); // output: frugence
console.log(nameArray); // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']
// working with DOM
const lis = document.querySelectorAll('li');
const lisArray = Array.from(document.querySelectorAll('li'));

console.log(Array.isArray(lis)); // output: false
console.log(Array.isArray(lisArray)); // output: true
console.log('\n=====================\n');
console.log('Array.of()');
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]