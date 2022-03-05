// Uncomment Each one to see results

// const request = require("request");

// 4 Creating Object

// const person = {
//   id: 2,
//   gender: "male",
// };
// const student = {
//   name: "ravi",
//   email: "ravi11@yopmail.com",
// };

// // creates copies of all enumerable own properties of object
// const me = Object.assign(person, student);
// console.log(me);
// // Values of both person and student are available on me object
// // console.log(me.id);
// // console.log(me.gender);
// // console.log(me.name);
// // console.log(me.email);

// --------------------------------------------------------------

// 5.Making promisified Function

// returns promise
// const getGoogleHomePage = new Promise((resolve, reject) => {
//   request("http://www.google.com", (error, response, body) => {
//     if (error) reject(error.hostname); // Print the error if one occurred
//     console.log("statusCode:", response && response.statusCode); // Print the response status
//     resolve(body); // the HTML for the Google homepage.
//   });
// });

// getGoogleHomePage
//   .then((data) => console.log("RESULT==>", data))
//   .catch((error) => console.log("NOT FOUND", error));

// ------------------------------------------------------------------

// // 6. Finding the Missing Number from the array.

// // Finding the total sum of the array from 1 to 100 using  "n *(n + 1) / 2 " formula.
// // here n is 100

// const totalSum = (100 * (100 + 1)) / 2; // totalSum = 5050

// // Given array with one missing number
// // Remove one number (as mentioned in question) or result will be 0.
// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
//   80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
//   99, 100,
// ];
// const sum = arr.reduce((partialSum, a) => partialSum + a, 0); // gives total sum of arr.

// const missingNumber = totalSum - sum;
// console.log(missingNumber);
