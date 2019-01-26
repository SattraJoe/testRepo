// Sattra's playground, this source code file is unused code in smartcrm project, just for attemp coding.
// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1; console.log(n);
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {            
//             console.log('start at index [ ', i, ' ]');
//             if (x[i] > x[i+1])
//             {
//                console.log('x[',i,'] : ', x[i], '  x[',i,'+ 1 ] : ', x[i+1]);
//             //    console.log({'x[i]': x[i], 'x[i+1]': x[i+1]}); 
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                console.log('x[',i,'] : ', x[i], '  x[',i,'+ 1 ] : ', x[i+1]);
               
//             //    console.log({'x[i]': x[i], 'x[i+1]': x[i+1]});
//                swapp = true;
//             }
//             console.log('end of index [ ', i, ' ]', '   ', x);
//             // console.log('                               ', '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]');
//             console.log('---------------------------------------');
//         }
//         n--; console.log('n >> ', n, '  swapp >> ', swapp);
//     } while (swapp);
//  return x; 
// }

// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// Define the `phonecatApp` module
// var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
// phonecatApp.controller('PhoneListController',['$scope', '$http', function PhoneListController($scope, $http) {
    
    // $scope.init = function(){
        // console.log('echo from custom.js')
        // $scope.getPhoneList();
    // }
    /**phones.json */
    // $scope.phones = [
    //     {
    //         age: 0, 
    //         id: "motorola-xoom-with-wi-fi", 
    //         imageUrl: "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
    //         name: "Motorola XOOM\u2122 with Wi-Fi", 
    //         snippet: "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    //     }, 
    //     {
    //         age: 1, 
    //         id: "motorola-xoom", 
    //         imageUrl: "img/phones/motorola-xoom.0.jpg", 
    //         name: "MOTOROLA XOOM\u2122", 
    //         snippet: "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    //     }, 
    //     {
    //         age: 2, 
    //         carrier: "AT&T", 
    //         id: "motorola-atrix-4g", 
    //         imageUrl: "img/phones/motorola-atrix-4g.0.jpg", 
    //         name: "MOTOROLA ATRIX\u2122 4G", 
    //         snippet: "MOTOROLA ATRIX 4G the world's most powerful smartphone."
    //     }, 
    //     {
    //         age: 3, 
    //         id: "dell-streak-7", 
    //         imageUrl: "img/phones/dell-streak-7.0.jpg", 
    //         name: "Dell Streak 7", 
    //         snippet: "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
    //     }, 
    //     {
    //         age: 4, 
    //         carrier: "Cellular South", 
    //         id: "samsung-gem", 
    //         imageUrl: "img/phones/samsung-gem.0.jpg", 
    //         name: "Samsung Gem\u2122", 
    //         snippet: "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
    //     }, 
    //     {
    //         age: 5, 
    //         carrier: "Dell", 
    //         id: "dell-venue", 
    //         imageUrl: "img/phones/dell-venue.0.jpg", 
    //         name: "Dell Venue", 
    //         snippet: "The Dell Venue; Your Personal Express Lane to Everything"
    //     }, 
    //     {
    //         age: 6, 
    //         carrier: "Best Buy", 
    //         id: "nexus-s", 
    //         imageUrl: "img/phones/nexus-s.0.jpg", 
    //         name: "Nexus S", 
    //         snippet: "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
    //     }, 
    //     {
    //         age: 7, 
    //         carrier: "Cellular South", 
    //         id: "lg-axis", 
    //         imageUrl: "img/phones/lg-axis.0.jpg", 
    //         name: "LG Axis", 
    //         snippet: "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
    //     }, 
    //     {
    //         age: 8, 
    //         id: "samsung-galaxy-tab", 
    //         imageUrl: "img/phones/samsung-galaxy-tab.0.jpg", 
    //         name: "Samsung Galaxy Tab\u2122", 
    //         snippet: "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
    //     }, 
    //     {
    //         age: 9, 
    //         carrier: "Cellular South", 
    //         id: "samsung-showcase-a-galaxy-s-phone", 
    //         imageUrl: "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg", 
    //         name: "Samsung Showcase\u2122 a Galaxy S\u2122 phone", 
    //         snippet: "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
    //     }, 
    //     {
    //         age: 10, 
    //         carrier: "Verizon", 
    //         id: "droid-2-global-by-motorola", 
    //         imageUrl: "img/phones/droid-2-global-by-motorola.0.jpg", 
    //         name: "DROID\u2122 2 Global by Motorola", 
    //         snippet: "The first smartphone with a 1.2 GHz processor and global capabilities."
    //     }, 
    //     {
    //         age: 11, 
    //         carrier: "Verizon", 
    //         id: "droid-pro-by-motorola", 
    //         imageUrl: "img/phones/droid-pro-by-motorola.0.jpg", 
    //         name: "DROID\u2122 Pro by Motorola", 
    //         snippet: "The next generation of DOES."
    //     }, 
    //     {
    //         age: 12, 
    //         carrier: "AT&T", 
    //         id: "motorola-bravo-with-motoblur", 
    //         imageUrl: "img/phones/motorola-bravo-with-motoblur.0.jpg", 
    //         name: "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122", 
    //         snippet: "An experience to cheer about."
    //     }, 
    //     {
    //         age: 13, 
    //         carrier: "T-Mobile", 
    //         id: "motorola-defy-with-motoblur", 
    //         imageUrl: "img/phones/motorola-defy-with-motoblur.0.jpg", 
    //         name: "Motorola DEFY\u2122 with MOTOBLUR\u2122", 
    //         snippet: "Are you ready for everything life throws your way?"
    //     }, 
    //     {
    //         age: 14, 
    //         carrier: "T-Mobile", 
    //         id: "t-mobile-mytouch-4g", 
    //         imageUrl: "img/phones/t-mobile-mytouch-4g.0.jpg", 
    //         name: "T-Mobile myTouch 4G", 
    //         snippet: "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
    //     }, 
    //     {
    //         age: 15, 
    //         carrier: "US Cellular", 
    //         id: "samsung-mesmerize-a-galaxy-s-phone", 
    //         imageUrl: "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg", 
    //         name: "Samsung Mesmerize\u2122 a Galaxy S\u2122 phone", 
    //         snippet: "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
    //     }, 
    //     {
    //         age: 16, 
    //         carrier: "Sprint", 
    //         id: "sanyo-zio", 
    //         imageUrl: "img/phones/sanyo-zio.0.jpg", 
    //         name: "SANYO ZIO", 
    //         snippet: "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
    //     }, 
    //     {
    //         age: 17, 
    //         id: "samsung-transform", 
    //         imageUrl: "img/phones/samsung-transform.0.jpg", 
    //         name: "Samsung Transform\u2122", 
    //         snippet: "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
    //     }, 
    //     {
    //         age: 18, 
    //         id: "t-mobile-g2", 
    //         imageUrl: "img/phones/t-mobile-g2.0.jpg", 
    //         name: "T-Mobile G2", 
    //         snippet: "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
    //     }, 
    //     {
    //         age: 19, 
    //         id: "motorola-charm-with-motoblur", 
    //         imageUrl: "img/phones/motorola-charm-with-motoblur.0.jpg", 
    //         name: "Motorola CHARM\u2122 with MOTOBLUR\u2122", 
    //         snippet: "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
    //     }
    // ];
    // $scope.orderProp = 'age';

    // $scope.getPhoneList = function() {
        // console.log('accessed getPhoneList()');
        // $http({
            // method: 'GET',
            // url: '/setup/getmenulist?pageNo=' + page + '&pageSize=' + $scope.pageSize +  '&mode=' + 
            //     $scope.mode + filterParam,
            // url: '/sattra/phonelist',            
            // headers: {
                // 'Content-Type': 'application/json'
            // }            
        // })
    // }

// }]);

/**
 *  object.js
 */

//  let car = {
//      make: 'bmw',
//      model: '745li',
//      year: 2010, 
//      getPrice: function(){
//          // perform some calc
//          return 5000;
//      },
//      printDescription: function(){
//          console.log(this.make + ' ' + this.model );
//      }
//  }
//  car.printDescription();
//  console.log(car.year);
//  console.log(car['year']);
//  var c = {
//      myProperty: [
//          {d: 'this'},
//          {e: 'can'},
//          {f: 'get'},
//          {g: 'crazy'}
//      ]
//  };
//  console.log(c.myProperty[0].d + ' ' + c.myProperty[1].e + ' ' 
//     + c.myProperty[2].f + ' ' + c.myProperty[3].g);

// let carLot = [
//     {year: 2017, make: 'Toyota', model: '4Runner'},
//     {year: 2015, make: 'BMW', model: '528i'},
//     {year: 1982, make: 'Buick', model: 'Skylark'}
// ];
// console.log(carLot[0].year);


// let contact = {
//     customers: [
//         {firstName: 'Bob', lastName: 'Tabor', phoneNumbers: ['(123) 456-7890', '(123) 567-8901']},
//         {firstName: 'Richard', lastName: 'Boughton', phoneNumbers: ['(123) 555-7894', '(123) 567-8903']}
//     ],
//     employees: [
//         {firstName: 'Steve', lastName: 'Jaworski', phoneNumbers: ['(312) 456-7890', '(312) 567-8901']},
//         {firstName: 'Conrad', lastName: 'Tabor', phoneNumbers: ['(312) 456-7890'] },
//         {firstName: 'Grant', lastName: 'Tabor', phoneNumbers: ['(312) 456-7890',] }
//     ]
// };
// console.log(contact.employees[0].firstName);

/*

Simple blog front end demo in order to learn AngularJS - You can add new posts, add comments, and like posts.

*/

// (function(){
//     var app = angular.module('blogApp',[]);
    
//     app.controller('BlogController', ['$http', function($http){
      
//       var blog = this;
//       blog.title = "AngularJS Blog App";
      
//       blog.posts = {};
//     //   $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
//     //     blog.posts = data;
//     //   });

//       $http({
//             method: 'GET',
//             url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json',
//             headers: {
//                 'Content-Type': 'application/json'
//             }  
//         }).then(function mySucces(response) {
//             blog.posts = response.data;
//             console.log('blog.posts => ',blog.posts[3]);
//         }, function myError(response) {
//             console.log('error');
//             /** */
//         })
      
//       blog.tab = 'blog';
      
//       blog.selectTab = function(setTab){
//         blog.tab = setTab;
//         console.log(blog.tab)
//       };
      
//       blog.isSelected = function(checkTab){
//         return blog.tab === checkTab;
//       };
      
//       blog.post = {};
//       blog.addPost = function(){
//         blog.post.createdOn = Date.now();
//         blog.post.comments = [];
//         blog.post.likes = 0;
//         blog.posts.unshift(this.post);
//         console.log('posts', blog.post)
//         blog.tab = 0;
//         blog.post ={};
//       };   
      
//     }]);
    
//     app.controller('CommentController', function(){
//       this.comment = {};
//       this.addComment = function(post){
//         this.comment.createdOn = Date.now();
//         post.comments.push(this.comment);
//         this.comment ={};
//       };
//     });
   
//   })();

/**
 *  module-pattern.js
 */

//  var counter = (function() {

//     // private stuff
//     let count = 0;

//     function print(message) {
//         console.log(message + '---' + count);
//     }

//     // return object
//     return {
//         value: count,
//         get: function() {return count; },
//         set: function(value) { count = value; },
//         increment: function() {
//             count += 1;
//             print('After increment: ');
//         }, 
//         reset: function() {
//             print('Before reset: ');
//             count = 0;
//             print('After reset: ');
//         }
//     }
//  })();

//  counter.increment();
//  counter.increment();
//  counter.increment();

//  console.log(counter.value);
//  counter.set(7);
//  console.log(counter.get());
//  counter.reset();

/****************************************************************** */
/**
 *  revealing-module.js
 */

//  let counter = (function() {
//     let count = 0;
//     function print(message) {
//         console.log(`${message} => ${count}`);
//     }
//     function getCount() { return count; }
//     function setCount(value) { count = value; }
//     function incrementCount() {
//         count += 1;
//         print('After increment: ');
//     }
//     function resetCount() {
//         print('Before reset: ');
//         count = 0;
//         print('After reset: ');
//     }

//     // "reveals" the public functions 
//     // clearer presentation
//     // however, you can (accidentally) overwrite
//     // the property values :/
//     return {
//         get: getCount,
//         set: setCount,
//         increment: incrementCount,
//         reset: resetCount
//     };
//  })();

//  console.log(counter);
//  console.log(counter.get());
/****************************************************************** */
// var myModule = (function() {
//     'use strict';
//     var _privateProperty = 'Hello World';
//     function _privateMethod(){
//         console.log(_privateProperty);
//     }
    
//     return {
//         publicMethod: function() {
//             _privateMethod();
//         }
//     };
// }());

// myModule.publicMethod();
// console.log(myModule._privateProperty);
// myModule._privateMethod();
/****************************************************************** */
/**
 *  closures.js
 */

    // function sayHello(name) {
    //     return function() {
    //         console.log('howdy ' + name);
    //     }    
    // }
    // let bob = sayHello('bob');
    // let conrad = sayHello('conrad');
    // let grant = sayHello('grant');
    // bob();
    // conrad();
    // grant();
/****************************************************************** */
/**
 *  this-keyword.js
 */
// let myObject = { value: 'My Object'};

// // gloabl.value = 'Global object';
// function third() {
//     return this.value;
// }
// console.log( myObject.apply(myObject) );
/****************************************************************** */
/**
 *  template-literals.js
 */
// let name = 'bob';
// console.log(`hi ${name}`);
// let sentence = `This is really a convenience.
//     You probably will never want to do something
//    quite like this.    You might chooose to put
//   long passages of text into an external file
// and load it somehow.`;
// console.log(sentence);
// function getReasonCount() { return 1; }
// let interpolation = `Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few reasons'} to try this.`
// let interpolation2 = 'Give me ' 
//                     + ((getReasonCount() == 1) ? 'one good reason' : 'a few reasons') 
//                     + ' to try this.'
// console.log(interpolation2);
/****************************************************************** */
/**
 *  regex.js
 */
// let pattern = /xyz/;
// console.log(pattern);
// console.log(typeof pattern);
// let value = 'This is xyz a test.';
// console.log(pattern.test(value));
// console.log(value.replace(pattern, 'just'));
// console.log(value.match(pattern));
// let match = value.match(pattern);
// console.log(match.index) ;

// // The name string contains multiple spaces and tabs,
// // and may have multiple spaces between first and last names.
// var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

// var output = ["---------- Original String\n", names + "\n"];

// // Prepare two regular expression patterns and array storage.
// // Split the string into array elements.

// // pattern: possible white space then semicolon then possible white space
// var pattern = /\s*;\s*/;

// // Break the string into pieces separated by the pattern above and
// // store the pieces in an array called nameList
// var nameList = names.split(pattern);

// // new pattern: one or more characters then spaces then characters.
// // Use parentheses to "memorize" portions of the pattern.
// // The memorized portions are referred to later.
// pattern = /(\w+)\s+(\w+)/;

// // New array for holding names being processed.
// var bySurnameList = [];

// // Display the name array and populate the new array
// // with comma-separated names, last first.
// //
// // The replace method removes anything matching the pattern
// // and replaces it with the memorized string—second memorized portion
// // followed by comma space followed by first memorized portion.
// //
// // The variables $1 and $2 refer to the portions
// // memorized while matching the pattern.

// output.push("---------- After Split by Regular Expression");

// var i, len;
// for (i = 0, len = nameList.length; i < len; i++){
//   output.push(nameList[i]);
//   bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
// }

// // Display the new array.
// output.push("---------- Names Reversed");
// for (i = 0, len = bySurnameList.length; i < len; i++){
//   output.push(bySurnameList[i]);
// }

// // Sort by last name, then display the sorted array.
// bySurnameList.sort();
// output.push("---------- Sorted");
// for (i = 0, len = bySurnameList.length; i < len; i++){
//   output.push(bySurnameList[i]);
// }

// output.push("---------- End");

// console.log(output.join("\n"));
/****************************************************************** */
/**
 *  constructor.js
 */

// function MyFunction() {
//     console.log('I am a simple function');
// }
// let myFunction = new MyFunction();
// console.log(typeof myFunction);
// MyFunction();
/****************************************************************** */
/**
 *  prototypes.js
 */
// let originalCar = {make: 'bmw', model: '754li', year: 2010};
// let newCar = Object.create(originalCar);
// /*console.log(newCar.make);
// newCar.make = 'audi';
// console.log(newCar.make); */
// console.log(newCar.whatever);
// /*console.log(Object.getPrototypeOf(newCar));
// let myPrototype = Object.getPrototypeOf(newCar);
// console.log(myPrototype.year);
// originalCar.doors = 4;
// console.log(newCar.doors);
// console.log(originalCar.hasOwnProperty('doors'));
// console.log(newCar.hasOwnProperty('doors')); */
/****************************************************************** */
/**
 *  classes.js
 */
// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     print() {
//         console.log(`${this.make} ${this.model} (${this.year})`);
//     }
// }

// let myCar = new Car('bmw', '745li', 2010);
// myCar.print();

// class SportsCar extends Car {
//     revEngine() {
//         console.log('Vrrroom goes the ' + this.model);
//     }
// }

// let mySportsCar = new SportsCar('dodge', 'viper', 2011);
// mySportsCar.print();
// mySportsCar.revEngine();
// myCar.revEngine();
/****************************************************************** */
/**
 *  arrow-function.js
 */
    /*let hi = () => { console.log('howdy'); }
    hi(); */

    /*let hi = (name) => { console.log(`howdy ${name}`); }
    hi('bob'); */

    /*let add = (a, b) => { return a + b  };
    console.log(add(7, 3)); */

    /*let names = ['david', 'eddie', 'alex', 'michael'];
    names.map((name) => { console.log(`howdy ${name}!`) }  ); */

    // let names = ['david', 'eddie', 'alex', 'michael'];
    // let i = 0;
    // names.map((name) => { i++; console.log(`howdy ${name} ${i}!`); } ); 

    /*let names = ['david', 'eddie', 'alex', 'michael'];
    var transformed = names.map((name) => { return `howdy ${name}!`; });
    console.log(transformed); */

    // for(var i = 0; i < 2; i++) {
    //     setTimeout(function() {console.log(i)}, 100)
    // }

    // for(let i = 0; i < 2; i++) {
    //     setTimeout(function() {console.log(i)}, 100)
    // }
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
//  let obj = undefined;
//  console.log(obj.b);
//  console.log('If the previous line of code throws an exception you\'ll never see this.');
// }
// beforeTryCatch();

// function afterTryCatch() {
//  try {
//      let obj = undefined;
//      console.log(obj.b);
//      console.log('If the previous line of code throws an exception you\'ll never see this.');
//  } catch (error) {
//      console.log('I caught an exception: ' + error.message);
//  } finally {
//      console.log('This will happen no matter what.');
//  }
//  console.log('My application is still running!');
// }
// afterTryCatch();
// function performCalculation(obj) {
//  if (!obj.hasOwnProperty('b')) {
//      throw new Error('Object missing property');
//  }
//  // continue with calculation w/ obj.b
//  return 6;
// }

// function performHigherLevelOperation() {
//  let obj = {};
//  let value = 0;
//  try {
//      value = performCalculation(obj);
//  } catch (error) {
//      console.log(error.message);
//  }

//  if (value == 0) {
//      // contingency
//      // retry logic
//  } else {
//      // if it doesn't have throw new Error, it will do next line. 
//      console.log('value: ', value);
//  }
// }
/****************************************************************** */
/**
 *  falsy-truthy.js
 */
// if (false) {} else { console.log('false is falsy'); }
// if (null) {} else { console.log('null is falsy'); }
// if (undefined) {} else { console.log('undefined is falsy'); }
// if (0) {} else { console.log('0 is falsy'); }
// if (NaN) {} else { console.log('NaN is falsy'); }
// if ('') {} else { console.log('an empty string with single-quotes is falsy'); }
// if ("") {} else { console.log('an empty string with double-quotes is falsy'); }

// // Everything else is truthy

// if (true) { console.log('true is truthy'); }
// if ({}) { console.log('an empty object is truthy'); }
// if ([]) { console.log('an empty array is truthy'); }
// if ('bob') { console.log('a non-empty string is truthy'); }
// if (new RegExp()) { console.log('a new instance of an object is truthy'); }
// if (10) { console.log('positive integers are truthy'); }
// if (-10) { console.log('negative integers are truthy'); }
// if (1.23) { console.log('positive floats are truthy'); }
// if (-1.23) { console.log('negative floats are truthy'); }
// if (Infinity) { console.log('positive Infinity is truthy'); }
// if (-Infinity) { console.log('negative Infinity is truthy'); }
/****************************************************************** */
/**
 *  date.js
 */
// let today = new Date();
// console.log('today : ', today);
// let joe = new Date('March 24, 1993 14:24:07');
// let joe = new Date(1993, 2, 24, 14, 24, 7); // month based on index:0 
// console.log('joe : ', joe);
// let elapseTime = today - joe;
// console.log('elapseTime : ', elapseTime);
// console.log('joe.getTime() : ', joe.getDay());
/****************************************************************** */
/**
 *  Closure Scope Chain.js
 */
// global scope
// var e = 10;
// function sum(a){
//   return function(b){
//     return function(c){
//       // outer functions scope
//       return function(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// console.log(sum(1)(2)(3)(4)); // log 20

// We can also write without anonymous functions:

// global scope
// var e = 10;
// function sum(a){
//   return function sum2(b){
//     return function sum3(c){
//       // outer functions scope
//       return function sum4(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// var s = sum(1);
// var s1 = s(2);
// var s2 = s1(3);
// var s3 = s2(4);
// console.log(s3) //log 20

// function createNewPerson(name) {
//     var obj = {};
//     obj.name = name;
//     obj.greeting = function() {
//       console.log('Hi! I\'m ' + obj.name + '.');
//     };
//     return obj;
// }

// var salva = createNewPerson('Salva');
// console.log(salva.name);
// salva.greeting();

// function dropdownMenu() {
//     var x = document.getElementById("dropdownClick");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//         /**change topnav to topnav.responsive */
//     } else {
//         x.className = "topnav";
//     }
// }
/****************************************************************** */
/*
/* Is there a way to implement sleep() with ES6 generators or with ES7 async? */
/* https://www.reddit.com/r/javascript/comments/5abyi2/is_there_a_way_to_implement_sleep_with_es6/
*
*
*/
// function delay(ms) {
//   return new Promise(function (resolve, reject) {
//       setTimeout(resolve, ms);
//   });
// }

// function usingDelay1() {
//   console.log('a');
//   delay(3000)
//   .then(() => {
//       console.log('b');
//   });    
// }

// async function usingDelay2() {
//   console.log('a');
//   await delay(3000);
//   console.log('b');
// }
// usingDelay1();

/****************************************************************** */
/**
 *  temp.js
 */
/* How to get a key in a JavaScript object by its value? */
/**https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value */
myObj = {
  key1: "Oak",
  key2: "Jasmine"
};
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
console.log('getKeyByValue(myObj, "Jasmine"): ', getKeyByValue(myObj, "Jasmine"));
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
// use lodash.js must include cdn link below
// https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js
console.log(_.findKey(users, { 'age': 1, 'active': true }));
var languageCodes = {
  DA: 'Danish',
  DE: 'German',
  DZ: 'Bhutani',
  EL: 'Greek',
  EN: 'English',
  EO: 'Esperanto',
  ES: 'Spanish'
};
console.log('getKeyByValue(languageCodes, "English"): ', getKeyByValue(languageCodes, "English"));
