// let person = {
//     name: 'Mosh',
//     age: 30
// };

// // dot notation
// person.name = ' John';

// // Bracket notation
// let selection = 'name'
// person[selection] = 'Mary';

// console.log(person);


// let colorArray = ['red', 'green', 'blue'];
// console.log(colorArray.length)


// function greet(firstName, lastName) {
//     console.log('Hi ' + firstName + ' ' + lastName);
// }


// greet('Anjanan', 'Maniks');


// function sqaure(num) {
//     return num * num;
// }

// console.log(sqaure(10));


// function reverseString(word) {
//     let reverse;
//     for (let i = word.length - 1; i >= 0; i--) {
//         reverse = reverse + word[i];
//     }
//     console.log(reverse)

// }

// metrics = ['performance', 'security', 'iam']

// console.log('metrices are' + metrics[2]);


// let gcpServer = {
//     address: "Google",
//     number: 12,
//     metric: {
//         performance: "high",
//         affected: 20,
//         totalNoOfMachines: 35
//     },
//     dataUsage: "  High",
//     isActive: false,
//     activeUsage: null,
//     ownerName: "Jagath"


// }


// function createServerConnection(ghajini) {
//     let db = 'MySQL'
//     if (ghajini == "memoryloss") {
//         console.log("hit in the head");
//     }

//     return 7;

// }


// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// add(3, 4);

// if (gcpServer.number > 40) {
//     console.log("Reached the max value")
// } else {
//     console.log("On limit")
// }

// console.log(gcpServer.metric.affected);

// function reverseString(str) {

//     var newString = "";


//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i]; // or newString = newString + str[i];
//     }


//     return newString;
// }



// let words = reverseString("hello");


// console.log(words))





// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }
// let x = 'Anjanan';

// console.log(x !== 'Anjanan');

// Java will convert it for you, so there is no need of a worry in javascript


// console.log('Cnjanan' < 'Banu');

// let age = 10;

// let type = age > 18 ? 'Adult ticket' : 'Child ticket'

// console.log(type);

// if (age <= 14) {
//     let type = 'Child ticket';
// } else {
//     let type = 'Adult ticket'
// }


// let highIncome = true;
// let CIBILScore = true;


// let eligiblePerson = highIncome || CIBILScore;

// let applicationStatus = !eligiblePerson;

// console.log("Loan Status: " + eligiblePerson);
// console.log("Application Status: " + applicationStatus);

/*
FALSY
undefined
null
0
false
''
NaN


*/


/*
Truty ---> anything that is not truty


*/

// let userColor = '1';
// let defaultColor = '';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);







// Bitwise operator

// This result are turned into binary and operated and then turned back into decimal
// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;

// myPermission = myPermission | readPermission;

// let msg = (myPermission & readPermission) ? 'Yes' : 'No';

// console.log(msg);


// let num1;
// let num2;

// if (num1 != null && num2 != null)
//     console.log('Values are present');
// else if (num1 == 4)
//     console.log('4 unknown');
// else
//     console.log('Killed it');


// let date = new Date();

// let hour = date.getHours();


// if (hour >= 0 && hour <= 13) {
//     console.log("Good Morning!");

// } else if (hour >= 13 && hour <= 17)
//     console.log("Good Afternoon");
// else
//     console.log("Good Evening !");



// let power = 'B'
// switch (power) {
//     case 'A':
//         console.log('SuperMan');
//         break;
//     case 'B':
//         console.log('BatMan');
//         break;
//     case 'C':
//         console.log('CatWoman');
//         break;
//     default:
//         console.log('Rajini');
//         break;
// }



for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) console.log('Even number among the loop : ' + i);
}













