/* 
* Learning Web Development from BitDegree section 5: Learning To Code With Javascript
*/
// var myNickName = "Joe";
// console.log('This is learning2codeJS ' + myNickName);
//
/**************************************************************/
/*
*    javascript:Comments_&_How_To_Link_Scripts.js
*/
    // var name = "Joe";
    // var age = 25;
    // var message = "Hi, my name is " + name + " and I am " + age + " years old!";
    // console.log('message: ' + message);

//
/**************************************************************/
/*
*    javascript:Variables & Strings
*/
    /*
    var name = "Jack";
    var age = 23;
    var shootingScore = 45.6;
    var message = "Hi, my name is " + name + " and I am " + age + " years old!";
    */

    // var firstName = "John";
    // var lastName = "JacobJingleHeimerSmith";
    // var dateOfBirth = "10-09-82";
    // var age = 23;
    // var profileImgUrl = 'http://coolpicks.com/johnjacob.jpg';

    // var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " +
    //     age + "rd birthday!";

    // console.log(loginWelcomeMessage);

//
/**************************************************************/
/*
*    javascript:Numbers
*/
    // var sum = 10 + 15;
    // var sub = 15 - 10;
    // var mul = 10 * 3;
    // var div = 10 / 3;
    // var mod = 10 % 3;
    // var msg = "10 / 3 = 3 with a remainder of " + mod;
    // var result1 = 10 * 5 + 3 - 4; // 49
    // var result2 = 10 * ((5 + 3) - 4); // 40
    // console.log(result2);

//
/**************************************************************/
/*
*    javascript:Comparison Operators
*/
    // var student1 = "Timmy";
    // var student2 = "Janessa";
    // var student3 = "Arun";

    // var balances = [50.45, 4000.12, -300.50];

    // var studentNames = ["Timmy", "Janessa", "Arun"];
    // var naughtyList = [];
    // naughtyList.push(studentNames[0]);

    // var index = naughtyList.indexOf("Timmy");
    // console.log(naughtyList);
    // if (index > -1) {
    // 	naughtyList.splice(index, 1);
    // }

    // console.log(naughtyList);
    // var myAccountBalance = 300;
    // var nikeSBShoes = 799.23;
    // var coupon = 500;
    // if (nikeSBShoes <= myAccountBalance) {
    // 	myAccountBalance -= nikeSBShoes;
    // 	console.log("We just bought some dope shoes!");
    // 	console.log("Account Balance: " + myAccountBalance);
    // } else if (nikeSBShoes - coupon <= myAccountBalance) {
    // 	console.log("We just bought some dope shoes with a coupon!");
    // 	myAccountBalance -= nikeSBShoes - coupon;
    // 	console.log("Account Balance: " + myAccountBalance);
    // } else {
    // 	console.log("You too broke fo shoe bra!");
    // }

    // var age = 23;
    // var joesAge = "23";
    // if (age == joesAge) {
    // 	console.log("I'm just the same age as Joe!");
    // }

    // var val1 = 23;
    // var val2 = "23";
    // if (val1 !== val2) {
    // 	console.log("These are not the same!");
    // } else {
    // 	console.log("One of these is like the other...");
    // }

//
/**************************************************************/
/*
*    javascript:Logical Operators
*/
    // if (1 === 1 && 2 === 2 || "joe" === "joe") {
    // 	console.log("These are both true!");
    // }

    // if (true && true) {
    // 	console.log("These are the same!");
    // }

    // if (1 === 3 || "joe" === "joe") {
    // 	console.log("one of these are true!");
    // }

    // var cat1 = 5;
    // var cat2 = 10;
    // var cat3 = 1;
    // var cat3disabledHandicap = true;
    // if ((cat1 > cat2 && cat1 > cat3) && !cat3disabledHandicap) {
    // 	console.log("Cat 1 is the cutest!");
    // } else if ((cat2 > cat1 && cat2 > cat3) && !cat3disabledHandicap) {
    // 	console.log("Cat 2 is the cutest!");
    // } else if ((cat3 > cat1 && cat3 > cat2) || cat3disabledHandicap) {
    // 	console.log("Cat 3 is the cutest!");
    // }
//
/**************************************************************/
/*
*    javascript:Arrays
*/
    var student1 = "Timmy";
    var student2 = "Janessa";
    var student3 = "Arun";

    var balances = [50.45, 4000.12, -300.50];
    var studentNames = ["Timmy", "Janessa", "Arun"];
    var person = ["John", 12, "USA", true];
    console.log(typeof studentNames);
    var naughtyList = [];
    naughtyList.push(studentNames[0]);
    naughtyList.push(studentNames[1]);
    naughtyList.push(studentNames[2]);

    var index = naughtyList.indexOf("Timmy");
    console.log(naughtyList);
    
    if (index > -1) {
    	naughtyList.splice(index, 1);
    }
    console.log(naughtyList);
    

    // var studentNames = ["Timmy", "Janessa", "Arun"];

