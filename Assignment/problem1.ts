// function accepetstring(charcter:string):string{
//     return charcter;
// }
// const result=accepetstring("afeeda")
// console.log("you enetered character is:",result);
// //problem1
// const promptSync = require('prompt-sync')();

import { log } from "console";
import { REFUSED } from "dns";

// // Function to accept a character and return it if valid
// function acceptCharacter(character: string): string {
//     // Check if the character is alphabetic
//     if (/^[a-zA-Z]+$/.test(character)) {
//         return character;
//     } else {
//         throw new Error("Invalid input. Please enter a valid alphabetic character.");
//     }
// }

// // Prompt the user for a character input
// const userInput: string = promptSync('Enter a character: ');

// // Call the function with the user input and handle errors
// try {
//     const result = acceptCharacter(userInput);
//     console.log(`You entered: ${result}`);
// } catch (error) {
//     console.error(error.message);
// }
//problem2
// const promptSync = require('prompt-sync')();

// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }

// const firstInput: string = promptSync("Enter the first number: ");
// const firstNumber: number = parseFloat(firstInput);
// const secondInput: string = promptSync("Enter the second number: ");
// const secondNumber: number = parseFloat(secondInput);
// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     console.error("Invalid input. Please enter valid numbers.");
// } else {
  
//     const result = add(firstNumber, secondNumber);
//     console.log(`The sum of ${firstNumber} and ${secondNumber} is: ${result}`);
// }
//problm 3

// const promptSync = require('prompt-sync')();


// function simpleInterest(amount: number, interest: number, years: number): number {
//     return (amount * interest * years) / 100;
// }
// const principalAmount: string = promptSync("Enter the principal amount: ");
// const amount: number = parseFloat(principalAmount);

// const interestRate: string = promptSync("Enter the interest rate: ");
// const interest: number = parseFloat(interestRate);

// const numberOfYears: string = promptSync("Enter the number of years: ");
// const years: number = parseFloat(numberOfYears);


// if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
//     console.error("Invalid input. Please enter valid numbers.");
// } else {
 
//     const result = simpleInterest(amount, interest, years);
//     console.log(`The simple interest is: ${result}`);
// }

//problem4
// const promptSync = require('prompt-sync')();
// function checkresult(mark:number):string{
//     if(mark>=50){
//         return "passed"
// //     }
//     else{
//       return "failed"
//     }
// }
// const input:string=promptSync("enter the the mark");
// const mark:number=parseFloat(input)
// // Validate the input and check the result
// if (isNaN(mark) || mark < 0 || mark > 100) {
//     console.error("Invalid input. Please enter a number between 0 and 100.");
// } else {
//     const result = checkresult(mark);
//     console.log(`You have ${result}.`);
// }

//problem5
// const promptSync = require('prompt-sync')();
// function checkresult(mark:number):string{
//     if(mark>90){
//         return "A"
//     }
//     else if(mark>80){
//       return "B"
//     }
//     else if(mark>70){
//         return "C"
//     }
//     else if(mark>60){
//         return "D"
//     }
//     else if(mark>50){
//         return "E"

//     }
//     else{
//         return "FAILED"
//     }
// }
// const input:string=promptSync("enter the the mark");
// const mark:number=parseFloat(input)
// // Validate the input and check the result
// if (isNaN(mark) || mark < 0 || mark > 100) {
//     console.error("Invalid input. Please enter a number between 0 and 100.");
// } else {
//     const result = checkresult(mark);
//     console.log(`You are grade is ${result}.`);
// }
//problem6
// const promptSync = require('prompt-sync')();
// const input:string=promptSync("enter the days 1 to 7"   );
// const daynumber:number=parseInt(input,10)
// let dayname:string;

//     switch (daynumber){
//         case 1:
//             dayname='sunday';
//             break;

//         case 2:
//             dayname='monday';
//             break;
//          case 3:
//             dayname ='tuesday';   

//         case 4:
//             dayname='wednesday'
//             break;
//          case 5:
//             dayname='thursday';
//             break;
//           case 6:
//             dayname='friday';
//             break;
//           case 7:
//             dayname='satuday' ;
//             break;
//         default:
//             dayname='invalid entry' 
//     }
//     console.log(dayname);

//problem7

// const promptSync = require('prompt-sync')();
// const input:string=promptSync("enter the limit");
// const limit:number=parseInt(input,10)
// function multiplicationtable(limit:number):void{
//      for(let i=1;i<=10;i++){
//         console.log(`${i} x ${limit}=${i * limit}`)
//      }
// }
// if (isNaN(limit) || limit <= 0) {
//     console.error("Invalid input. Please enter a positive integer.");
// } else {
//     // Call the function to display the multiplication table
//     multiplicationtable(limit);
// }
//problem 8
// const promptSync = require('prompt-sync')();
// const input:string=promptSync("enter the limit");
// const limit:number=parseInt(input,10)
// function oddsum(limit:number):number{
//     let sum=0
//      for(let i=1;i<=limit;i++){
//         if(i%2!==0){
//             sum+=i;
//         }
//      }
//      return sum;
// }
// if (isNaN(limit) || limit <= 0) {
//     console.error("Invalid input. Please enter a positive integer.");
// } else {

//    let result= oddsum(limit);
//    console.log(`The sum of odd numbers up to ${limit} is: ${result}`);
// }

//problem9
// Import the prompt-sync module for synchronous user input
// const promptSync = require('prompt-sync')();

// function printPattern(rows: number): void {
//     for (let i = 1; i <= rows; i++) {
//         let line = '';
//         for (let j = 1; j <= i; j++) {
//             line += j + ' ';
//         }
//         console.log(line.trim());
//     }
// }


// const input: string = promptSync('Enter the number of rows: ');

// const rows: number = parseInt(input, 10);


// if (isNaN(rows) || rows <= 0) {
//     console.error('Invalid input. Please enter a positive integer.');
// } else {
 
//     printPattern(rows);
// }


//problem10

// const promptSync = require('prompt-sync')();


// function swapArrays<T>(array1: T[], array2: T[]): void {
//     if (array1.length !== array2.length) {
//         throw new Error('Arrays must be of the same length to swap their values.');
//     }
//     for (let i = 0; i < array1.length; i++) {
//         [array1[i], array2[i]] = [array2[i], array1[i]];
//     }
// }
//problem 11
// function parseArrayInput(input: string, size: number): number[] {
//     const array = input.split(',').map(Number);
//     if (array.length !== size || array.some(isNaN)) {
//         throw new Error(`Invalid input. Please enter ${size} numeric values separated by commas.`);
//     }
//     return array;
// }

// try {
    
//     const sizeInput: string = promptSync('Enter the size of arrays: ');
//     const size: number = parseInt(sizeInput, 10);


//     if (isNaN(size) || size <= 0) {
//         throw new Error('Invalid input');
//     }

//     const array1Input: string = promptSync(`Enter the values of Array 1 `);
//     const array1: number[] = parseArrayInput(array1Input, size);

//     const array2Input: string = promptSync(`Enter the values of Array 2 `);
//     const array2: number[] = parseArrayInput(array2Input, size);


//     swapArrays(array1, array2);

//     // Display the arrays after swapping
//     console.log('Arrays after swapping:');
//     console.log('Array 1:', array1.join(', '));
//     console.log('Array 2:', array2.join(', '));
// } catch (error) {
//     console.error(error.message);
// }
//problem 12
// Import the prompt-sync module for synchronous user input
// Import the prompt-sync module for synchronous user input
// const promptSync = require('prompt-sync')();


// function countEvenNumbers(array: number[]): number {
//     let count = 0;
//     for (const num of array) {
//         if (num % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }

// const sizeInput: string = promptSync('Enter the size of array');
// const size: number = parseInt(sizeInput, 10);
// if (isNaN(size) || size <= 0) {
//     console.error('Invalid ');
// } else {
//     console.log(`Enter ${size} values for the array`);
//     const arrayInput: string = promptSync();
//     const elements: string[] = arrayInput.split(',').map(element => element.trim());
//     if (elements.length !== size) {
//         console.error(`error`);
//     } else {
//         const array: number[] = [];
//         let valid = true;
//         for (const element of elements) {
//             const number = parseFloat(element);
//             if (isNaN(number)) {
//                 console.error(`Invalid number '${element}' in the array.`);
//                 valid = false;
//                 break;
//             }
//             array.push(number);
//         }
//         if (valid) {
//             const evenCount = countEvenNumbers(array);
//             console.log(`count even numbers in the given array is ${evenCount}`);
//         }
//     }
// }
//problem12
// const promptSync = require('prompt-sync')();
// function sortArrayDescending(array: number[]): number[] {
//     return array.sort((a, b) => b -a);
// }
// const sizeInput: string = promptSync('Enter the size of the array: ');
// const size: number = parseInt(sizeInput, 10);
// if (isNaN(size) || size <= 0) {
//     console.error('Invalid input. Please enter a positive integer for the size.');
// } else {
//     console.log(`Enter ${size} values for the array`);
//     const arrayInput: string = promptSync();
//     const elements: string[] = arrayInput.split(',').map(element => element.trim());
//     if (elements.length !== size) {
//         console.error(`The number of elements entered does not match the specified size of ${size}.`);
//     } else {
      
//         const array: number[] = [];
//         let valid = true;
//         for (const element of elements) {
//             const number = parseFloat(element);
//             if (isNaN(number)) {
//                 console.error(`Invalid number '${element}' in the array.`);
//                 valid = false;
//                 break;
//             }
//             array.push(number);
//         }
//         if (valid) {
//             const sortedArray = sortArrayDescending(array);
//             console.log('Sorted array:');
//             console.log(sortedArray.join(', '));
//         }
//     }
// }
//problem 13

// function isPalindrome(str: string): boolean {
  
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//     const reversedStr = cleanStr.split('').reverse().join('');


//     return cleanStr === reversedStr;
// }


// const inputString: string = 'MALAYALAM';
// if (isPalindrome(inputString)) {
//     console.log('Entered string is a palindrome.');
// } else {
//     console.log('Entered string is not a palindrome.');
// }
//problem 14
// function addMatrix(matrix1:number[][],matrix2:number[][]){
//     const rows=matrix1.length;
//     const cols=matrix1[0].length;
//     const result:number[][]=Array.from({length:rows},()=>Array(cols).fill(0))
//     for(let i=0;i<rows;i++){
//         for (let j=0;j<cols;j++){
//             result[i][j]=matrix1[i][j]+matrix2[i][j];
//         }
//     }
//     return result
// }
// const matrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const matrix2 = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];

// const sumMatrix = addMatrix(matrix1, matrix2);


// console.log('Sum of the two matrices is:');
// sumMatrix.forEach(row => {
//     console.log(row.join('\t'));
// });
//problem 15

// const promptSync = require('prompt-sync')();
// function getArray():number []{
//     const size=parseInt(promptSync("enter the sizr of the array"));
//     const array:number[]=[];
//     for(let i=0;i<size;i++){
//         const element=parseFloat(promptSync(`enter the element ${i+1}`));
//         array.push(element)
//     }
//     return array
// }
// function displayArray(array: number[]): void {
//     console.log('The array elements are:');
//     array.forEach((element, index) => {
//         console.log(`Element ${index + 1}: ${element}`);
//     });
// }

// function main(): void {
//     const array = getArray();
//     displayArray(array);
// }

// main();
//problem16
// const promptSync = require('prompt-sync')();
// function prime(num:number):boolean{
//     if(num<=1) return false;
//     if(num<=3 ) return true;
//     if(num%2==0|| num%3==0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true;


// }
// const input = promptSync('Enter a number: ');
// const num = parseInt(input, 10);

// if (isNaN(num)) {
//     console.log('Please enter a valid integer.');
// } else {
//     if (prime(num)) {
//         console.log(`Entered number ${num} is a Prime number.`);
//     } else {
//         console.log(`Entered number ${num} is not a Prime number.`);
//     }
// }
//problem 17
// const promptSync = require('prompt-sync')();



// class Calculator {

//     addition(a: number, b: number): number {
//         return a + b;
//     }


//     subtraction(a: number, b: number): number {
//         return a - b;
//     }

    
//     multiplication(a: number, b: number): number {
//         return a * b;
//     }


//     division(a: number, b: number): number {
//         if (b === 0) {
//             throw new Error('Division by zero is not allowed.');
//         }
//         return a / b;
//     }
// }
//problem 17
// function main() {
//     const calculator = new Calculator();
//     let continueCalculation = true;

//     while (continueCalculation) {
//         console.log('\nSelect an operation:');
//         console.log('1. Addition');
//         console.log('2. Subtraction');
//         console.log('3. Multiplication');
//         console.log('4. Division');
//         console.log('5. Exit');

//         const choice = promptSync('Enter your choice (1-5): ');

//         if (choice === '5') {
//             console.log('Exiting the program.');
//             continueCalculation = false;
//             continue;
//         }

//         const num1 = parseFloat(promptSync('Enter the first number: '));
//         const num2 = parseFloat(promptSync('Enter the second number: '));

//         if (isNaN(num1) || isNaN(num2)) {
//             console.log('Invalid input. Please enter valid numbers.');
//             continue;
//         }

//         let result: number;

//         if (choice === '1') {
//             result = calculator.addition(num1, num2);
//             console.log(`Result: ${num1} + ${num2} = ${result}`);
//         } else if (choice === '2') {
//             result = calculator.subtraction(num1, num2);
//             console.log(`Result: ${num1} - ${num2} = ${result}`);
//         } else if (choice === '3') {
//             result = calculator.multiplication(num1, num2);
//             console.log(`Result: ${num1} * ${num2} = ${result}`);
//         } else if (choice === '4') {
//             try {
//                 result = calculator.division(num1, num2);
//                 console.log(`Result: ${num1} / ${num2} = ${result}`);
//             } catch (error) {
//                 console.log(error.message);
//             }
//         } else {
//             console.log('Invalid choice. Please select a valid option.');
//         }
//     }
// }

// main();
//p8roblem 18
// const promptSync = require('prompt-sync')();
// function calculateGrade(writtenTest:number,labexams:number,assignment:number):number{
//     const weightedSum=(writtenTest*0.7)+(labexams*0.2)+(assignment*0.1);
//     return weightedSum;
// }
// function main() {
//     console.log('Enter the marks scored by the student:');

//     const writtenTest = promptSync('Written test: ');
//     const labExams = promptSync('Lab exams: ');
//     const assignments = promptSync('Assignments: ');

//     const grade = calculateGrade(writtenTest, labExams, assignments);

//     console.log(`Grade of the student is: ${grade.toFixed(1)}`);
// }

// main();

// const promptSync = require('prompt-sync')();

// function calculateIncomeTax(annualIncome) {
//     if (annualIncome < 250000) {
//         return 0;
//     } else if (annualIncome >= 250000 && annualIncome <500000) {
//         return 0.05 * (annualIncome - 250000);
//     } else if (annualIncome >= 500000 && annualIncome <= 1000000) {
//         return 0.20 * (annualIncome - 500000) + 25000;
//     } else {
//         return 0.30 * (annualIncome - 1000000) + 100000;
//     }
// }
// const annualIncome = parseFloat(promptSync("Enter the annual income: "));

// if (!isNaN(annualIncome)) {
//     const incomeTax = calculateIncomeTax(annualIncome);
//     console.log(`Income tax amount = ${incomeTax.toFixed(2)}`);
// } else {
//     console.log("Invalid input. Please enter a numeric value.");
// }




// const promptSync = require('prompt-sync')();
// function main() {

//     const size = parseInt(promptSync('Enter the array limit: '), 10);
//     if (isNaN(size) || size < 2) {
//         console.log('Invalid array size. Please enter an integer greater than or equal to 2.');
//         return;
//     }
//     const inputArray: number[] = [];
//     console.log('Enter the values of the array:');
//     for (let i = 0; i < size; i++) {
//         const element = parseFloat(promptSync(`Element ${i + 1}: `));
//         if (isNaN(element)) {
//             console.log('Invalid input. Please enter a valid number.');
//             i--; 
//         } else {
//             inputArray.push(element);
//         }
//     }
//     const resultArray: number[] = [];
//     for (let i = 0; i < inputArray.length - 1; i++) {
//         resultArray.push(inputArray[i] * inputArray[i + 1]);
//     }
//     console.log('Output:');
//     console.log(resultArray.join('\t'));
// }

// main();



//problem 20
// function printPattern(rows: number): void {
//     let counter = 1;
//     for (let i = 1; i <= rows; i++) {
//         let rowOutput = '';
//         for (let j = 1; j <= i; j++) {
//             rowOutput += counter + '\t';
//             counter++;
//         }
//         console.log(rowOutput.trim());
//     }
// }


// printPattern(4);
//problem 22
const promptSync = require('prompt-sync')();
class ArrayOperations {
    // Declare two 2D arrays
    array1: number[][] = [];
    array2: number[][] = [];
    sumArray: number[][] = [];
  
    // Function to get values for two arrays
    getArray(): void {
      let rows: number = Number(promptSync("Enter the number of rows:"));
      let columns: number = Number(promptSync("Enter the number of columns:"));
  
      // Get values for array1
      console.log("Enter the values of array 1:");
      this.array1 = [];
      for (let i = 0; i < rows; i++) {
        let row: number[] = [];
        for (let j = 0; j < columns; j++) {
          row.push(Number(promptSync(`Enter value for array 1 at position (${i + 1}, ${j + 1}):`)));
        }
        this.array1.push(row);
      }

      console.log("Enter the values of array 2:");
      this.array2 = [];
      for (let i = 0; i < rows; i++) {
        let row: number[] = [];
        for (let j = 0; j < columns; j++) {
          row.push(Number(promptSync(`Enter value for array 2 at position (${i + 1}, ${j + 1}):`)));
        }
        this.array2.push(row);
      }
    }

    addArray(): void {
      const rows = this.array1.length;
      const columns = this.array1[0].length;
      this.sumArray = [];
  
      for (let i = 0; i < rows; i++) {
        let row: number[] = [];
        for (let j = 0; j < columns; j++) {
          row.push(this.array1[i][j] + this.array2[i][j]);
        }
        this.sumArray.push(row);
      }
    }
  
    // Function to display the result array
    displayArray(): void {
      console.log("Sum of array 1 and array 2:");
      for (let i = 0; i < this.sumArray.length; i++) {
        console.log(this.sumArray[i].join("\t"));
      }
    }
  }
  
  // Main function to create object and execute methods
  function main(): void {
    const arrayOps = new ArrayOperations();
    arrayOps.getArray(); // Get values for the arrays
    arrayOps.addArray(); // Add the two arrays
    arrayOps.displayArray(); // Display the result array
  }
  
  // Call the main function
  main();
  
//problem 23

// const promptSync = require('prompt-sync')();
// class ArrayOperations {
//     // Declare a 2D array
//     array: number[][] = [];

//     getArray(): void {
//       let rows: number = Number(promptSync("Enter the number of rows:"));
//       let columns: number = Number(promptSync("Enter the number of columns:"));
  
//       this.array = [];
  
//       console.log("Enter the array values:");
//       for (let i = 0; i < rows; i++) {
//         let row: number[] = [];
//         for (let j = 0; j < columns; j++) {
//           row.push(Number(promptSync(`Enter value for position (${i + 1}, ${j + 1}):`)));
//         }
//         this.array.push(row);
//       }
//     }
//     displayArray(): void {
//       console.log("Array elements are:");
//       for (let i = 0; i < this.array.length; i++) {
//         console.log(this.array[i].join("\t"));
//       }
//     }
//   }
//   function main(): void {
//     const arrayOps = new ArrayOperations();
//     arrayOps.getArray(); 
//     arrayOps.displayArray(); 
//   }
  
//   main();
  
//problem 24
// class Area{
//     circle(radius:number):number{
//         return Math.PI*Math.pow(radius,2)
//     }
//     square(side:number):number{
//         return Math.pow(side,2)
//     }


  
//     rectangle(length: number, width: number): number {
//         return length * width;
//     }


//     triangle(base: number, height: number): number {
//         return (base * height) / 2;
//     }
// }
// class MyClass extends Area {
  
//     public static main(): void {
//         const promptSync = require('prompt-sync')();
//         const areaInstance = new MyClass();

//         console.log('Enter your choice:');
//         console.log('1. Circle');
//         console.log('2. Square');
//         console.log('3. Rectangle');
//         console.log('4. Triangle');
        
//         const choice = parseInt(promptSync('Enter choice (1-4): '));

//         switch (choice) {
//             case 1:
//                 const radius = parseFloat(promptSync('Enter the radius of the circle: '));
//                 const circleArea = areaInstance.circle(radius);
//                 console.log(`Area of the circle is: ${circleArea.toFixed(2)}`);
//                 break;
            
//             case 2:
//                 const side = parseFloat(promptSync('Enter the side length of the square: '));
//                 const squareArea = areaInstance.square(side);
//                 console.log(`Area of the square is: ${squareArea.toFixed(2)}`);
//                 break;

//             case 3:
//                 const length = parseFloat(promptSync('Enter the length of the rectangle: '));
//                 const width = parseFloat(promptSync('Enter the width of the rectangle: '));
//                 const rectangleArea = areaInstance.rectangle(length, width);
//                 console.log(`Area of the rectangle is: ${rectangleArea.toFixed(2)}`);
//                 break;

//             case 4:
//                 const base = parseFloat(promptSync('Enter the base of the triangle: '));
//                 const height = parseFloat(promptSync('Enter the height of the triangle: '));
//                 const triangleArea = areaInstance.triangle(base, height);
//                 console.log(`Area of the triangle is: ${triangleArea.toFixed(2)}`);
//                 break;

//             default:
//                 console.log('Invalid choice. Please enter a valid option between 1 and 4.');
//                 break;
//         }
//     }
// }

// MyClass.main();
//problem 25
// var library = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];


// library.forEach(book => {
//     if (book.readingStatus) {
//         console.log(`Already read '${book.title}' by ${book.author}.`);
//     } else {
//         console.log(`You still need to read '${book.title}' by ${book.author}.`);
//     }
// });

//problem 26

// let my_string = "1234"; 

// try {

//     let reversedString = my_string.split('').reverse().join('');
//     console.log(`Reversed string is : ${reversedString}`);
// } catch (err) {

//     console.log(`Error : ${err.message}`);
// } finally {

//     console.log(`Type of my_string is : ${typeof my_string}`);
// }


















//problem 27
// function checkHeight(my_height: any): void {
//     if (isNaN(my_height)) {
//         throw new Error('notANumberError');
//     } 
//     else if (my_height > 100) {
//         throw new Error('HugeHeightError');
//     } 
//     else if (my_height < 1) {
//         throw new Error('TinyHeightError');
//     } 
//     else {
//         console.log(my_height);
//     }
// }


// try {
//     checkHeight('seven'); 
// } catch (error) {
//     console.error(error.message); 
// }

// try {
//     checkHeight(77);
// } catch (error) {
//     console.error(error.message);
// }



//problem 28
// function Car(this:any,name:string,mileage:number,max_speed:number){
//     this.name=name;
//     this.mileage=mileage;
//     this.max_speed=max_speed;
// }
// const myCar=new(Car as any)('toyota',15000,100)
// console.log(myCar.name);
// console.log(myCar.mileage);
// console.log(myCar.max_speed);

//problem 29
// Define the myFilter function with appropriate types
// function myFilter(myArray: number[], callback: (element: number) => boolean): number {
//     let sum: number = 0;
//     myArray.forEach(element => {
//         if (callback(element)) {
//             sum += element;
//         }
//     });
//     return sum;
// }
// const isEven = (number: number): boolean => number % 2 === 0;

// // Example usage
// let myArray: number[] = [1, 2, 3, 4, 5];
// const result = myFilter(myArray, isEven);
// console.log("Result is " + result); 
