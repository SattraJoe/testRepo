/*
* array.js
*/
// let a = [4, 8, 15, 16, 23, 42];
// let b = ['david', 'eddie', 'alex', 'michael'];

// console.log(a);
// console.log(a[1]);

// a.push(9, 77);
// console.log(a);

// a.pop()
// console.log(a);
/**********************************************************************/
/*
*  string.js
*/
// console.log('this is string.js');
// let first = 'Knowledge is power but enthusiasm pulls the switch.';
// let second = 'Do or not.    There is no try.';
// let third = '4,8,15,16,23,42';

// You can even call methods on string leterals
// console.log('bob loves you'.toUpperCase());

// let mySplit = third.split(',');
// console.log(mySplit);

// let mySlice = first.slice(13, 18);
// console.log(mySlice);

// let mySubstr = first.substr(13, 5);
// console.log(mySubstr);

// let myEndsWith = second.endsWith('try.');
// console.log(myEndsWith);

// let myStartsWith = second.startsWith('Do');
// console.log(myStartsWith);

// let myInclude = second.includes('There');
// console.log(myInclude);

// let myRepeat = 'Ha! '.repeat(3);
// console.log(myRepeat);

// let myTrim = '    bloated    ';
// console.log(myTrim.length);
// console.log(myTrim.trim().length);
/**********************************************************************/
/*
*  array-method.js
*/
// console.log('This is array-method.js');
// let names = [ 'david', 'eddie', 'alex', 'michael' ];
// let others = [ 'sammy', 'gary', 'wolfgang', 'mark' ];

// let lost = [ 4, 8, 15, 16, 23, 42 ];
// let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];

// var combine = lost.concat(fibonacci);
// console.log(combine);

// console.log(fibonacci.join('~'));

// // push, pop
// console.log(lost.shift());
// console.log(lost);
// lost.unshift(1, 2, 3, 4);
// console.log(lost);

// console.log(names);
// console.log(names.reverse());
// console.log(names.sort());

// console.log(others.indexOf('mark'));
// console.log(combine.lastIndexOf(1));

// map
// var filtered = combine.filter((x) => { if (x <= 15) return x;} );
// console.log(filtered);
// names.forEach((name) => { console.log(`howdy ${name}!`) });

// console.log(filtered.every((num) => num < 100));
// console.log(filtered.every((num) => num > 16));
// console.log(fibonacci.some((num) => num > 50));
/**********************************************************************/
/*
*  handling-errors.js
*/
// console.log('This is handling-errors.js');
// let a = 7 * undefined / "panama";
// console.log(a);
// function beforeTryCatch() {
// 	let obj = undefined;
// 	console.log(obj.b);
// 	console.log('If the previous line of code throws an exception you\'ll never see this.');
// }
// beforeTryCatch();

// function afterTryCatch() {
// 	try {
// 		let obj = undefined;
// 	    console.log(obj.b);
// 	    console.log('If the previous line of code throws an exception you\'ll never see this.');
// 	} catch (error) {
// 		console.log('I caught an exception: ' + error.message);
// 	} finally {
// 		console.log('This will happen no matter what.');
// 	}
// 	console.log('My application is still running!');
// }
// afterTryCatch();
// function performCalculation(obj) {
// 	if (!obj.hasOwnProperty('b')) {
// 		throw new Error('Object missing property');
// 	}
// 	// continue with calculation w/ obj.b
// 	return 6;
// }

// function performHigherLevelOperation() {
// 	let obj = {};
// 	let value = 0;
// 	try {
// 		value = performCalculation(obj);
// 	} catch (error) {
// 		console.log(error.message);
// 	}

// 	if (value == 0) {
// 		// contingency
// 		// retry logic
// 	} else {
// 		// if it doesn't have throw new Error, it will do next line. 
// 		console.log('value: ', value);
// 	}
// }

// performHigherLevelOperation();
/**********************************************************************/
/*
*  dom-intro.js
*/
// console.log('This is dom-intro.js');
// (function () {
	
// 	function clickHandler(message) {
// 		console.log('hi ... ' + message);
// 	}
// 	// Get a reference to myButton
// 	let myButton = document.getElementById('myButton');
// 	myButton.addEventListener('click', function () { clickHandler('hi from file') });

// })();
