# FCC---Basic-JavaScript

## Understanding Basic JavaScript

- I will be going through the Basic JavaScript course on freeCodeCamp and documenting parts and concepts that I find difficult to comprehend.
- UPDATE: I will be going through the Basic JavaScript module again and document all exercises for personal future reference.

### Commenting in JavaScript

- Comments are lines of code that JavaScript ignores.
- It is a great way to document notes on codes for personal use, or other programmers who may be collaborating or taking over the project.
- There are two methods of commenting in JavaScript. in-line and multi-line

#### In-line

```js
// This is an in-line comment
```

- Note that you do not need to 'close' the comment.
- Use for simple notes.

#### Multi-line

```js
/* This is a 
multi-line comment */
```

- multi-line comments must be closed.
- use for elaborating the notes.

- Good commenting will improve communication, as well as the intent of the code.

- Build a habit of documenting everything, explaining the intent of the code, verbalizing the flow of the code.

### Declare JavaScript Variables

- 'Data' is anything that is meaningful to the computer.
- JavaScript provides eight different data types
  - undefined
  - null
  - boolean (true / false)
  - string ("string" or 'string')
  - symbol
  - bigint
  - number (0123456789)
  - object ([], {})

- Variables allow computers to store and manipulate data in a dynamic manner.
- This is done by giving the data a more "approachable" label rather than using the data itself.
- Any of the above data types may be stored in a variable.

- Create or 'declare' a variable by placing the keyword ```var``` in front of the variable name, and end the statement with semicolons(;)
  ```var myName;```
- Variable names can be composed of numbers, letters, $ or _
- It may not contain spaces or start with a number

### Storing/Assigning values with the Assignment Operator

- Use the equal sign (=) to assign value (data) to a variable.
- What is commonly known as the 'equal sign' is called the assignment operator in JavaScript.

```js
myVariable = 5;   // This assigns 5 to the variable 'myVariable'
```
  
- If there are any calculations on the right side of the assignment operator, the calculation is performed before the value is assigned to the variable.

```js
var a;    // This declares variable 'a'
a = 7;    // This assigns the value 7 to the variable 'a'
          // Whenever 'a' appears in a code, it will recognize it as '7'
```

### Assigning Variable Value to Another Variable

- After a value is assigned to a variable using the assignment operator, that value assigned to one variable can be assigned to another variable by using the assignment operator again.

```js
var myVar;
myVar = 5;    // 5 is assigned to variable 'myVar'
var myNum;
myNum = myVar // Simply assign 'myVar' as the value of 'myNum'. Whenever myVar appears, it is recognized as 5 in the code.
```

### Initializing Variables with the Assignment Operator

- It is common to initialize a variable in the same line it is declared.
- In other words, rather than declaring a variable and assigning a value separately, value is assigned to the variable as it is declared.

```var a = 9;```

### Declare String Variables

- In the same manner as shown in the previous examples, declare and initialize string variables.

```js
var myFirstName = "Josh";   // variable values enclosed in quotes are called 'string literals'
var myLastName = "Kim";     // Both single and double quotes can be used. String literals can be composed of zero or more characters
```

### Understanding Uninitialized Variables

- When JS variables are defined, they initially have the value 'undefined'.
- If a mathematical operation on an undefined variable, the result will return 'NaN' (Not a Number)
- If an undefined variable is concatenated ("added") with a string, it will return a string of 'undefined'.

```js
var a;
var b;
var c;

a = a + 1;            // NaN
b = b + 5;            // NaN
c = c + " String!";   // undefined String!
```

### Understanding Case Sensitivity in Variables

- In JS, all variables and function names are case sensitive.
- While it is possible to have multiple variables with the same name but different letter casing.
- But it is advised not to do so for sake of clarity.

- Best practice is to use ```camelCase```.

### Differences between var and let keywords

- One of the biggest problems with the ```var``` keyword is that it can be overwritten.
  
```js
var camper = "James";   // variable 'camper' is originally declared as "James"
var camper = "David";   // Somewhere along the code, same variable "camper" is declared again as "David"
console.log(camper);    // console will display "David"
```

- This may not be much of a problem for simple codes.
- But as the code becomes more complex, it is highly possible to unintentionally overwrite previously declared variables.
- Also, since it is not recognized as an error, it is more difficult to debug such cases.

- Use the keyword ```let``` instead to prevent such errors

```js
let camper = "James";
let camper = "David";
console.log(camper);    // Console will display 'SyntaxError: unknown: Identifier 'camper' has already been declared.
```

### Declare a Read-Only Variable with the const Keyword

- ```const``` is another keyword used to declare a variable.
- Not only is it 'non-overwritable' like the ```let``` keyword, but ```const``` is Read-Only.
- Once it is assigned, it cannot be reassigned.
- If there is a variable in your code that you want to remain constant throughout the code, use the 'const' keyword to declare the variable.

- NOTE: It is common to use all uppercase letters for immutable variables and lowercase or camelCase for mutable variables.

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);   // 'freeCodeCamp is awesome!'
```

- Note that the value of the variable 'fact' can be reassigned.
- But if you try to redeclare the variable 'fact' with the 'let' keyword, it will throw a syntax error saying "identifier 'fact' has already been declared"
- If you try to assign a new variable to 'FCC', which is declared with a 'const' keyword, it will throw a 'TypeError' saying "'FCC' is read-only".

---

### Add Two Numbers with JavaScript

- ```Number``` is a data type is JS that represent numeric data
- Just like in mathematics, the '+' sign is used as the 'addition operator' in JS.

```js
const sum = 10 + 10;
console.log(sum);   // 20
```

### Subtract One Number from Another in JS

- Use the '-' subtraction operator to subtract numbers in JS

### Multiply Two Numbers with JS

- Use the '*' multiplication operator to multiply numbers

### Divide One Number by Another with JS

- Use the '/' division operator to divide numbers

### Increment/Decrement a Number with JavaScript

- Add 1 to a variable by using the ++ operator

```i++;``` in JS is equivalent to ```i = i + 1;```

- Conversely, subtract 1 from a variable using the -- operator

```i--;``` is equivalent to ```i = i - 1;```

### Create Decimal Numbers with JS

- Decimal values can be stored/assigned to a variable.
- Decimal values are sometimes referred to as 'floating point' numbers or 'floats'

Simply assign a decimal value to a variable ```const myDecimal = 3.14;```

### Multiply/Divide Two Decimals with JS

- Same logic applies.

```js
const product = 2.0 * 2.5;  // Multiply using '*'
console.log(product);       // console will display 5.0
```

```js
const quotient = 4.4 / 2.0; // Divide using '/'
console.log(quotient);      // console will display 2.2
```

### Finding a Remainder in JavaScript

- The remainder operator ```%``` gives the remainder of the division of two numbers

```js
5 % 2 = 1 // because
Math.floor(5 / 2) = 2 // Quotient
2 * 2 = 4 // Therefore
5 - 4 = 1 // Remainder
```

- A number can be checked if it's even or odd by dividing the number by 2 and checking its remainder

- 17 % 2 = 1 (17/2 = 8 + 1, therefore 17 is odd)
- 48 % 2 = 0 (48/2 = 24, no remainder, therefore 48 is even)

### Compound Assignment with Augmented Addition/Subtraction/multiplication/Division

- In programming, it is common to use assignments to modify the contents of a variable.

- ```myVar = myVar + 5;``` This will add 5 to the value of 'myVar' and reassign the updated value to 'myVar'.
  - Remember, everything to the right of the assignment operator is executed first.
- Modifying assignments in this manner is very common, and there are operators that execute the math operation and assignment at the same time.
- To do this use the += operator.

```js
let myVar = 1;
myVar += 5;         // This is equivalent to myVar = myVar + 5
console.log(myVar); // Console will display the updated value of myVar, which is 6.
```

- Same logic applies to subtraction.

```myVar -= 5;``` is equivalent to ```myVar = myVar - 5;```

- Again, same thing when multiplying

```myVar *= 5;``` is equivalent to ```myVar = myVar* 5;```

- Once again, same when dividing

```myVar /= 5;``` is equivalent to ```myVar = myVar / 5;```

### Escaping Literal Quotes in Strings

- When defining a string, it must start and end with a single or a double quote.
- But what if there is a literal quote using single or double quotes inside the string?

- You can ```escape``` a quote by placing a backslash (\) in FRONT of the quotation mark.

```js
const sampleStr = "Hannah said, \"Josh is learning JavaScript\".";   // Remember to close the string after the literal quote inside the string
console.log(sampleStr);   // Hannah said, "Josh is learning JavaScript".
```

- The backslash tells JavaScript that the start quotation mark of the literal quote inside the string is not the end of the string.
- It's telling it to look further, and the literal quote should be included inside the string.

### Quoting Strings with Single Quotes

- Both double quotes and single quotes may be used in JavaScript.
- But the start and end quotes must be of the same type.

```js
const myStr = "<a href=\"https://www.example.com\" target=\"_blank\">Link</a>";
```

- The above example uses escape characters to avoid throwing an error. It can be simplified using both types of quotes

```js
const myStr = '<a href="https://www.example.com" target="_blank">Link</a>';
```

- But there may also be cases where the single quote mark is used as an apostrophe

```js
const myStr = 'He said, "I don't think I can do this any longer".';
```

- The above string will throw an error because the apostrophe used in the word "don't" will close the string.
- In such cases, a combination of single and double quotes, as well as escape characters must be used.

```js
const myStr = 'He said, "I don\'t think I can do this any longer".';\
```

### Escape Sequences in Strings

- Quotes are not the only characters that can be escaped inside a string.
  - ```\'``` single quote
  - ```\"``` double quote
  - ```\\``` backslash
  - ```\n``` new line
  - ```\t``` tab
  - ```\r``` carriage return
  - ```\b``` word boundary
  - ```\f``` form feed

Note: Backslash itself must be escaped in order to display as a backslash

### Concatenating Strings with Plus Operator

- When ```+``` is used with strings, it is called the 'concatenation operator'.

```js
const ourStr = "This is the start. " + "This is the end.";  // "This is the start. This is the end."
```

- Note that you need to take spaces between strings into account.

### Concatenating Strings with the Plus Equals Operator

- Use the ```+=``` operator to concatenate a string onto the end of an existing string variable.
- Reminder: You need to take spaces between strings into account.

```js
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";  // "This is the first sentence. This is the second sentence."
```

### Constructing String with Variables

- Sometimes you may need to add in variables to strings

```js
const myName = "Josh";
const myStr = "My name is " + myName + " and I am well!";
console.log(myStr);     // "My name is Josh and I am well!"
```

### Appending Variables to Strings

- Let the example speak for itself

```js
const someAdjective = "challenging.";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);   // "Learning to code is challenging."
```

### Find the Length of a String

- Find the length of a string value by appending ```.length``` to the string variable or string literal.

```js
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);    // 8
```

- Note that if there are spaces present in the string, it will also be accounted for in the length result.

### Use Bracket Notation to Find the First Character in a String

- 'Bracket notation' is used to identify a character at a specific index within a string.

- VERY IMPORTANT TO NOTE: Most programming languages do not begin counting at 1.
  - The count begins at 0. This is called ```zero-based indexing```.

- In order to specify a certain position in the string, use the bracket notation and specify the position of the desired character in the string.

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);     // L
```

### Understand String Immutability

- In JavaScript, string values are immutable. It cannot be altered or modified once created/declared.

- For example, if you try to reassign a different character to a certain index position of a variable value using the following method, it will throw an error.

```js
let myStr = "Bob";
myStr[0] = "J";
```

- This does not mean that the variable itself cannot be modified or reassigned.
- You can reassign a variable with a new value, as shown below.

```js
let myStr = "Jello World";
myStr = "Hello World";
```

## Use Bracket Notation to Find the Nth Character in a String

- Use the bracket notation to find a character at other index positions in a string.

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);   // v
```

### Use Bracket Notation to Find the Last Character in a String

- To get the last letter of a string (the length of the string is unknown), subtract one from the string's length.
- The syntax is ```someVariable[someVariable.length - 1]```

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);    // e
```

### Use Bracket Notation to Find the Nth-to-last Character in a String

- Same logic applies here
- It is useful when you don't know the length of the string.

```js
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);    // c
```

### Word Blanks

- In this challenge, we provide you with a noun, a verb, an adjective and an adverb.
- You need to form a complete sentence using words of your choice, along with the words we provide.

- You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
- You will then assign the formed string to the wordBlanks variable.
- You should not change the words assigned to the variables.

- You will also need to account for spaces in your string, so that the final sentence has spaces between all the words.
- The result should be a complete sentence.

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myAdjective + " hairy " + myNoun + " suddenly " + myVerb + " " + myAdverb + " towards the water."
```

- Notice that the declared variable values do not include spaces.
- In order to add a space between the declared variables, simply add an empty string with a space.

### Store Multiple Values in One Variable Using JavaScript Arrays

- Multiple data can be stored in one place using the ```array``` variable.
- To declare an array, use square brackets to open and close the variable, and separate each value within with a comma.
- Arrays can contain both strings and numbers at the same time.

```js
const myArray = ["one", 2];
```

### Nest One Array within Another Array

- Multiple arrays can be nested in a single array as well.

```js
const myArray = [["Josh", 43], ["Hannah", 42], ["Nathan", 9], ["JJ", 6], ["Jubilee", 3]]
```

### Access Array Data with Indexes

- Bracket notations are used to specify the position of an entry in the array.
- Remember, indexing uses zero-based indexing.

```js
const myArray = [50, 60, 70];
console.log(myArray[0]);    // console will display 50
const myData = myArray[2];  // You can also declare a new variable and assign the index position of an array
console.log(myData);        // The new variable result 60 will be displayed in the console
```

### Modify Array Data with Indexes

- Remember when trying to modify a string variable character by using the index position throws an error.
- But array entries are mutable, and the data can be freely modified.
- This is also true even if the array was declared with a 'const'

```js
const myArray = [18, 64, 99];
myArray[0] = 45;

console.log(myArray);   // [45, 64, 99]
```

- Note that there shouldn't be any spaces between the array name and the square brackets.

### Access Multi-Dimensional Arrays with Indexes

- It sounds more intimidating than it is.
- It is just an array of arrays.
- First set of brackets refer to the data entries of the outermost (first level) array.
- Each additional pair of brackets refers to the next level of entries.

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];          // [[10, 11, 12], 13, 14]
const nestedsubarray = arr[3][0]; // [10, 11, 12]
const element = arr[3][0][1];     // [11]
```

### Manipulate Arrays with push Method

- Append data to the end of an array using the ```push()``` function
- ```.push()``` function takes one or more parameters and 'pushes' them onto the end of an array.

```js
const arr1 = [1, 2, 3];
arr1.push(4);           // console will display [1, 2, 3, 4]

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);          // console will display ["Stimpson", "J", "cat", ["happy", "joy"]]
```

### Manipulate Arrays with pop Method

- Remove data from the end of an array using the ```pop()``` function
- The removed value can be stored by assigning it to another variable.
- The array with the removed element is returned
- Any type of data entry can be 'popped' off from an array - numbers, strings, nested arrays, etc.

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);   // 6
console.log(threeArr);  // [1, 4]
```

### Manipulate Arrays with shift Method

- Use ```shift()``` remove the first element of an array
  
```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(ourArray);            // ["J", ["cat"]]
console.log(removedFromOurArray); // "Stimpson"
```

### Manipulate Arrays with unshift Method

- Use ```unshift()``` to add elements to the beginning of an array, just like ```push()``` adds elements to the end of an array.

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();           // Removes "Stimpson"
ourArray.unshift("Happy");  // Adds "Happy" as the first element of the array
console.log(ourArray);      // ["Happy", "J", "cat"]
```

### Shopping List

- Create a shopping list.
- Add strings (items) and numbers (quantity) in sub-arrays contained in a single array.
- List at least 5 items.
- This is quite self-explanatory.

```js
const myList = [
  ["milk", 3],
  ["apples", 12],
  ["cucumbers", 4],
  ["bell peppers", 6],
  ["cheese", 1]
];
```

### Write Reusable JavaScript with Functions

- Divide up the code in to reusable parts called functions

```js
function functionName() {
  console.log("Hello World");
}
```

- Call or invoke the function by using its name followed by parentheses.  (functionName();)
- Each time the above function is called, the console will display "Hello World"
- All of the code between the curly braces will be executed when the function is called.

### Passing Values to Function with Arguments

- Parameters are variables that act as 'placeholders' for the values that are to be passed to a function when it's called.
- Functions are typically defined with one or more parameters.
- The actual parameter values that are passed into a function when it is called are referred to 'arguments'.

Basic syntax

```js
function testFunc(param1, param2) {
  console.log(param1, param2);
}
```

- Create a function called ```functionWithArgs``` that accepts two arguments and outputs their sum to the dev console.
- Call the function with two numbers as arguments.

```js
function functionWithArgs(num1, num2) {
  return num1 + num2;
}
```

- There is nothing really wrong with this code. It will return the sum of the two arguments passed.
- But the problem is that it will not automatically display the result to the console.
- If you want to see the result displayed, you will need to enter ```console.log(functionWithArgs(num1, num2));``` outside of the function with actual values for the parameters for the result to display.
- The key to the above challenge is 'outputs their sum to the dev console'.

```js
function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}
// And call the function to display the result in the console
functionWithArgs(7, 9);   // The console will display 16
```

### Return a Value from a Function

- After passing value into a function with arguments, use a return statement to send the value back out of a function.

```js
function timesFive(num) {
  return num * 5;
}

console.log(timesFive(8));    // you can send the function result to display directly in the console.

const answer = timesFive(8);  // Or you can assign the function to a variable and call the variable to display in the console.
console.log(answer);
```

### Global Scope and Functions

- In JS, 'scope' refers to the visibility of variables.
- Variables that are defined outside of a function block have ```Global Scope```.
- It means that it can be seen everywhere in the JS code.
- Variables declared without a ```let``` or ```const``` keyword are automatically created in the global scope.
- This can cause unintended problems down the road. Make sure you declare variables with a ```let``` or ```const``` keyword.

- There are three types of scope, depending on where in the code it is placed

```js
let num1 = 18;      // Global scope
function fun() {
  let num2 = 20;    // Local scope
  if (true) {
    let num3 = 22;  // Block scope
  }
}
```

- if the ```let``` keyword is removed from all variables above, all of the declared variables will become ```global scope```

### Local Scope and Functions

- Variables that are declared inside a function, as well as its function parameters have ```local scope```
- This means that it is only visible within the function

```js
function myLocalScope(name) {
  // function 'myLocalScope' takes a name argument
  const myVar = "Good morning " + name;
  // variable 'myVar' is defined inside the function, making it a local scope.
    console.log('inside myLocalScope', myVar);
}
myLocalScope("Josh");   // When the function is called, console log is displayed "inside myLocalScope: Good morning Josh"

console.log('outside myLocalScope', myVar);
// This will throw a ReferenceError because 'myVar' is not defined outside of the function.
```

### Global vs. Local Scope in Functions

- It is possible to have both local and global variables with the same name in your code.
- In this case, local variable takes precedence over the global variable

```js
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "Sweater";
  return outerWear;
}

myOutfit();   // When function is called, it will return "Sweater"
```

### Understanding Undefined Value returned from a Function

- A function can include a ```return``` statement, but it does not have to.
- If the function does not have a ```return``` statement, the function processes the inner code when it is called, but the returned value is undefined.

```js
let sum = 0;
function addSum(num) {
  sum = sum + num;
}

addSum(3);          // If called, console will display 'undefined'.
console.log(sum);   // The console displays 3. The value of the 'sum' variable has changed in a global scope.

addSum(15):         // undefined
console.log(sum);   // 18
```

### Assignment with a Returned Value

- Remember that everything to the right side of the equal sign is executed before a value is assigned to a variable.
- In other words, if a function is placed on the right side of the equal sign of a variable, the function will execute first, and then its return value will be assigned to the variable.

```js
let processed = 0;          // Variable 'processed' is declared globally with a 'let' keyword. It means that it can be reassigned with a new value.
function processArg(num) {  // Function processArg will take a number as an argument and return its processed value.
  return (num + 3) / 5;
}

processed = processArg(47); 
// Not re-declaring. Reassigning with function 'processArg' with 47 as its argument.
// The return value (10) will be newly assigned to variable 'processed'.
console.log(processed);
// Console will display the updated value of the variable 'processed'. (10)
```

### Stand in Line

INSTRUCTIONS

- Write a function 'nextInLine' which takes an array (arr) and a number (item) as arguments.
- Add the number to the end of the array, then remove the first element of the array.
  - ```arr.push(item)``` will push the item parameter value to the end of the array.
  - ```arr.shift()``` will remove the first element of the array.
  
- The nextInLine function should then return the element that was removed.
  - ```return arr.shift()``` will return the element that was removed.

```js
function nextInLine(arr, item) {
  arr.push(item);                 // This will push the 'item' value passed to the function
  return arr.shift();             // This will remove the first element of the array passed and return the removed value.
}

OR

function nextInLine(arr, item) {
  arr.push(item);                 // This is the same
  const removed = arr.shift();    // Declare a const variable and assign the removed element
  return removed;                 // Return the value assigned to the 'removed' variable. This method seems more logical
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));  // Will display the original array passed to the function
console.log(nextInLine(testArr, 6));                // This will execute the function with the variables passed to the function and display the return value
console.log("After: " + JSON.stringify(testArr));   // Will display the updated array.
```

- ```JSON.stringify()``` will probably be covered later.
- But in the mean time, one of its function is to convert an array into a string.

### Understanding Boolean Values

- Boolean, a data type, may be one of two values: ```true``` or ```false```
- True and False are not the same as "true" and "false".
- They are like little on/off switches

### Use Conditional Logic with If statements

- ```if``` statements are used to make decisions in code.
- The ```if``` statement tells JS to execute the code in curly braces under certain conditions, which are defined in the parentheses
- These conditions are called ```boolean```.

- If the condition is ```true```, the statement inside the curly braces are executed.
- If ```false```, the statement will not execute.

```js
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

- When ```test``` is called with the value ```true```, the ```if``` statement evaluates ```myCondition``` to see if it's true.
- If it's true, the function returns "It was true"
- If not, the function will not execute and automatically return "It was false"

### Comparison with the Equality Operator

- There are many comparison operators in JS.
- They all return boolean values.
- The most basic operator is the equality operator (==).
- Note that equality operator is different from the assignment operator (=).

- In order for JS to compare two different data types (such as numbers and strings), it needs to do some conversion.
- This is called ```Type Coercion```.
- In other words, equality operator will consider number 1 to be equal to string "1", or number 6 to be equal to "6".

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));     // console will display "Not Equal"
console.log(testEqual("12"));   // console will display "Equal" due to Type Coercion
```

### Comparison with the Strict Equality Operator

- Strict equality operator (===) does not perform type conversion.
- It means that the the compared values must be strictly equal.

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);     // "Not Equal"
testStrict("7");    // "Not Equal"
```

### typeof

- You can determine the type of a variable or value with the ```typeof``` operator

```js
console.log(typeof 5); // console will display 'number'
console.log(typeof "5"); // console will display 'string'
```

### Comparison Operators (Self-explanatory. No further notes on the following)

- == equality operator
- === strict equality operator: Does not convert data types
- != inequality operator
- !== strict inequality operator: Does not convert data types
- `> greater than operator
- `>= greater than or equal to operator
- < less than operator
- <= less than or equal to operator

### Comparison with the Logical And Operator

- There are cases where more than one thing requires testing at once.
- The ```logical and operator (&&)``` returns 'true' only if operands on both the left and right are true.

The following is an if statement with two conditions

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No"
```

- In the above code, if num is greater than 5 and less than 10, it will return "Yes". i.e if number is between 5 and 10
- If either one of the conditions is false, it will automatically return "No".

The above can also be written using the && operator.

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No"
```

### Comparisons with the Logical Or Operator

- Similar to the && operator, the ```logical or operator (||)``` can take multiple conditions.

Check out the following

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

- If num is greater than 10, it will return "No".
- If num is less than 5, it will return "No".
- In other words, the above pattern will return "Yes" only if num is between 5 and 10, inclusive.

The above can be written using the || operator

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

### Else Statements

- If an ```if``` statement condition is true, the block of code following its curly braces are executed.
- If 'false', usually nothing happens.
- Use an ```else``` statement to execute an alternate block of code when the condition is false.

```js
function testElse(val) {
  let result = "";            // variable 'result' is declared globally

  if (val > 5) {              // if 'val' is greater than 5
    result = "Bigger than 5"; // new value "Bigger than 5" will be reassigned to the variable 'result'
  } else {                    // for all other conditions
    result = "5 or Smaller";  // new value "5 or Smaller" will be reassigned to the variable 'result'
  }
  return result;              // The result will be returned
}
```

### Else If Statements

- Multiple conditions can be addressed using the ```else if``` statement.

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```

- One thing to remember when using ```if``` and ```else if``` statements is the logical order of the conditions.
- The function is executed from top to bottom so you need to be mindful of which statement comes first.
  
```js
function order(num) {
  if (num < 2) {          
    return "Less than two";
  } else if (num < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

console.log(order(0));
```

- Although the value of 'num' passed through the function is in fact less than 1, the function will return "Less than two".
- This is because of the logical order of the function is out of place.
- It would be more logical to place (num < 1) prior to (num < 2).

#### Chaining else if statements

- Multiple ```else/if``` statements can be chained for complex logic.
- No further explanation.

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```

### Golf Code

INSTRUCTIONS

- Your function will be passed par and strokes arguments.
- Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

```js
//  Strokes          Return
//     1         "Hole-in-one!"
// <= par - 2    "Eagle"
// par - 1       "Birdie"
// par           "Par"
// par + 1       "Bogey"
// par + 2       "Double Bogey"
// >= par + 3    "Go Home!" 
```

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

- Use if...else statements to return specific strings based on the comparison between par and number of strokes.
- Use strict equality operators where applicable (hole in one, par...)

```js
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}
```

- The above code doesn't really require strict equality.
- The regular equality operator is sufficient (==)
- Only "Eagle" requires <= because anything less than par - 2 (it could be -3, -4, depending on how high the par value is) is considered an "Eagle"

### Selecting from Many Options with Switch Statements + Default Option

- If there are many options to choose from, use a ```switch``` statement.
- ```Switch``` statement tests a value and can have many 'case' statements that define various possible values.
- Statements are executed from the first matched 'case' value until a ```break``` is encountered.

- Case values are tested with strict equality (===).
- The 'break' tells JS to stop executing statements.
- If there is no 'break', it will move on to execute the following statement.

```js
function caseInSwitch(val) {
  let answer = "";          // variable answer is declared as function scope and assigned with an empty string.

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "stingray";
      break;
  }
  return answer;
}
```

- Depending on the number (val) passed to the switch statement, it will assign the corresponding answer value to the answer variable.
- If the statement is missing all the 'break' command, the answer will return "delta" regardless of the number (val) passed.
- If there is one break command after "gamma", the answer will return "gamma" except when number (4) is passed. 4 will return "delta"

- You could add a default option as the last case of a switch statement to provide a return value if an argument (val) passed is not specified in the switch statement.

### Multiple Identical Options in Switch Statements

- Remember that case statements are executed until a break is encountered.
- Use this behaviour as an advantage to handle multiple inputs that generate the same output.

For example,

```js
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
```

- Note that you cannot provide a range of numbers, such as '1 ~ 3', '4 ~ 6'.
- You need to specify each number in the range.

- Using a ```switch``` statement can be more efficient compared to using an ```if/else if``` statement that functions identically.

### Returning Boolean Values from Functions

- All comparison operators return a boolean 'true' or 'false' value.
- if/else is commonly used for comparison

```js
function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
```

The above can be simplified as shown below.

```js
function isLess(a, b) {
  return a < b;
}
```

- Since the comparison operator will always return boolean (true/false), the arguments passed will be evaluated to determine if it's either true or false, and return the value.

### Return Early Pattern for Function

- When a return statement is reached, the current function stops its execution and the control returns to the calling location.

```js
function abTest(a, b) {
  if (a < 0 || b < 0) {
  return undefined;
}
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```

- In the above function, if either a or b is less than 0, the function will stop executing and return ```undefined```.
- If not, the function will execute.

### JavaScript Algorithm and Data Structure - Counting Cards

INSTRUCTIONS

In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

```js
// Count     Change Cards
//  +1       2, 3, 4, 5, 6
//   0          7, 8, 9
//  -1    10, 'J', 'Q', 'K', 'A'
```

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

- Use a switch statement to determine what to return based on which cards.
- Omit any cases for cards 7,8,9 since it will have no effect on the count.

```js
let count = 0;          // global scope. variable 'count' is declared with a value of 0.
function cc(card) {     // function 'cc' will pass a 'card' value as its argument.
  switch (card) {         // switch statement is used to pass the card values and determine what to do for the values passed.
    case 2:               
    case 3:               // If the card value passed is between 2 and 6, the count will increment by 1.
    case 4:               // Once count is added, the statement will 'break' and return to receive another card value.
    case 5:
    case 6:
      count++;            // values 7 to 9 are omitted because it has no effect on the card count.
      break;
    case 10:              // If the card value passed is between 10 and 'A', the count will decrement by 1.
    case 'J':             // Once count is updated, the statement will 'break' and return to receive another card value.
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
    if (count > 0) {          // Use 'if...else' statement to determine what to do based on the card count.
      return count + " Bet";  // If count is positive, return the count value and " Bet"
    } else {                  // whitespace is added to the string to allow for a space between the count value and the string value
      return count + " Hold"; // If count is negative, return the count value anc concatenate " Hold"
  }
}
```

#### Alternate solution using if...else statement

- if card value is less than or equal to 6, add 1 to count.
- else if card value is greater than or equal to (>=) "10" (not number '10'), subtract count by 1.
  - if...else statement uses strict equality for comparison by default. Using greater than equal (>=) in the function overrides the default rule.
  - Using string "10" instead of number '10' as card value because we need to take into account for 'J', 'Q', 'K', and 'A', which are strings. Using greater than equal to (>=) for comparison will convert the data type. This means that if we pass any other letters into the string value (such as 'O', 'H', 'F', etc... which are not card values in this case), it will still recognize it as a string value and return '-1 Hold'.
- After counting the cards, use ternary expression count + (count > 0 ? " Bet" : " Hold").
  - This will return the count value based on the card value passed and the string " Bet" or " Hold" based on the the condition (count>0). If the count value is greater than 0 (True), it will return '1 Bet'. If the count value is 0 or less than 0(False), it will return '0 Hold' or '-1 Hold'.

- The if...else statement with the ternary value seems more readable and efficient compared to the switch statement (which I still don't quite understand).

```js
let count = 0;

function cc(card) {
  if (card <= 6) {
    count++;
  } else if (card >= '10') {
    count--;
  }
  return count + (count > 0 ? " Bet" : " Hold");
}

console.log(cc(2));     // 1 Bet
console.log(cc(3));     // 2 Bet
console.log(cc(7));     // 2 Bet - count does not change
console.log(cc('K'));   // 1 Bet - Decrement count, still positive
console.log(cc('A'));   // 0 Hold
console.log(cc('10'));  // -1 Hold
```

### Building JavaScript Objects

- Objects are similar to arrays.
- But rather than using indexes to access and modify data, objects use ```properties```.
- Objects store data in a structured manner.

```js
const myDog = {
  "name": "Collie".
  "legs": 4,
  "tails": 1,
  "friends": ["Dot", "Coco"]
};
```
  
- You can use numbers as properties.
- You can omit quotes for single-word string properties.
- But JS will typecast non-string properties as strings.

- Separate each group of prop and value using commas, with the exception of the final prop and value.

#### Accessing objects using dot notation / bracket notation

- use dot notation when you know the name of the property you are trying to access.
- When accessing data, quotation marks are not required if using dot notation.

```JS
const obj= {
  "prop1" = "value1",
  "prop2" = "value2"
}

const prop1Value = obj.prop1;
const prop2Value = obj.prop2;
```

- use bracket notation when the property you are trying to access has a space in its name.
- It can still be used for property names without a space in its name.
- Quotation marks are required when using bracket notation

```JS
const obj= {
  "prop one" = "value1",
  "prop two" = "value2"
}

const oneValue = obj["prop one"];
const twoValue = obj["prop two"];
```

#### Accessing object properties with variables

- Another use of bracket notation on objects is to access a property stored as the value of a variable.
- Do not use quotation marks around the variable name when using it to access the property.

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";   // Assign the known name as the value to the variable 'myDog'
const myBreed = dogs[myDog];  // Use the variable to access the object. The value identified is then assigned to another variable 'myBreed'
console.log(myBreed);   // Console will display "Doberman"
```

Another example

```js
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const playerName = testObj[playerNumber];
console.log(playerName);    // Console will display "Montana"
```

### Update/Add/Delete object properties

- You can update or add object properties using dot or bracket notation.

```JS
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
```

Update the object property by reassigning its value.

```JS
myDog.name = "Happy Coder";
console.log(myDog.name); // Console will display "Happy Coder"
```

Or

```JS
myDog["name"] = "Happy Coder";
```

Add new property in a similar manner

```js
myDog.bark = "Woof-woof"; // This will add the new property "bark" in the 'myDog' object with a value "Woof-woof"
```

Delete a property by doing the following

```js
delete myDog.bark; // with the key word 'delete', specify the object name and the property you wish to delete.
```

### Using Objects for Lookups

- Objects can be thought of as a key/value storage.
- If you have tabular data, you can use an object to lookup values (rather than switch of if/else)

```js
const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };

  const articleAuthor = article.author;   // declare a variable and assign it with the appropriate value in the object
  const articleLink = article.link;

  const value = "title";
  const valueLookup = article[value];

  console.log(valueLookup);     // How to create objects in JavaScript
  console.log(articleAuthor);   // Kaashan Hussain
  console.log(articleLink);     // https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/

  ```

```js
function phoneticLookup(val) {
  let result = "";        // declare a function scope variable with the name 'result' and value of an empty string.
  
  const lookup = {
    "alpha": "Adams",     // Using switch or if/else seems inefficient since you have to specify 'if' this, then 'return' that.
    "bravo"; "Boston",    // Create an object containing all possible arguments and its corresponding return values.
    "charlie": "Chicago", 
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];   // reassign the variable 'result' with the 'access path' to the object 'lookup'. 
                          // (val) passed to the function will be accessed in the object 'lookup', and its value will be assigned to the variable 'result'.    
  return result;          // return 'result'
}
```

### Testing objects for properties (.hasOwnProperty())

- Use .hasOwnProperty(propname) to determine if the property in question has the given property name. This method returns True or False.

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");      // true
myObj.hasOwnProperty("middle");   // false
```

INSTRUCTIONS

- Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp).
- If the property is found, return that property's value. If not, return "Not Found".
- use if...else statement to determine if obj.hasOwnProperty(checkProp) is true or false.
  
  ```js
  function checkObj(obj, checkProp) {     
    if (obj.hasOwnProperty(checkProp)) {    // 'if' the 'obj' passed to the function 'has' the specified property 'checkProp',
      return obj[checkProp];                // return the value of 'checkProp' property in object 'obj'.
    } else {                                // If not, 
      return "Not Found";                   // return "Not Found"
    }
  }
  ```
  
### Manipulating Complex Objects

- This one has been very confusing for me every time around.

INSTRUCTIONS

- Add a new album to the myMusic array.
- Add artist and title strings, release_year number, and a formats array of strings.

- The only reason I get confused with this challenge is because I end up over-thinking everything by the time I finish one challenge. Thinking I need to write another function, return something, push or shift something here and there.
- Just read the instructions. It usually tells me what I need to do. In this case, simply add it in.

#### Accessing nested objects

- This is quite straight forward.
- Assign the contents of the glove box property inside myStorage to the gloveBoxContents variable.
- Use dot notation wherever applicable, bracket for property names with spaces in it.

```js
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Solution
const gloveBoxContents = myStorage.car.inside["glove box"];
```

#### Accessing Nested Arrays

- Use index (bracket notation) to access nested arrays (not nested objects)
- Remember, index begins at 0, not 1.
- Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

```js
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Solution
const secondTree = myPlants[1].list[1];
```

### JavaScript Algorithms and Data Structures - Record Collection

INSTRUCTION

- You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

- You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

  - Your function must always return the entire record collection object.
  - REMEMBER: prop, track, id, are all referring to the data passed in to the function.

  - If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.

    ```JS
    if (prop !== "tracks" && value!== "") {
      records[id][prop] = value;
    }
    ```

  - If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.

  ```JS
  if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  }
  ```

  - The above if statement is passable as it is, but the following would also work.
  
  ```JS
  if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks) === false) {
    records[id][prop] = [value];
  }
  ```

  - Based on the data passed, the above if statement assumes that the value is not an empty string since the instruction says to add the value to the "tracks" property.

  - If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

  ```JS
  if (prop === "tracks" && value !== "") {
    records[id][tracks].push(value);
  }
  ```

  - If value is an empty string, delete the given prop property from the album.

  ```JS
  if (value === "") {
    delete records[id][prop];
  }
  ```

### while loop

PSEUDO-CODE

```JS
while ('condition') {
  'execute command'
}
```

### for loop

PSEUDO-CODE

```JS
for ('initialization statement'; 'condition statement'; 'final expression');
```

### Iterate through an Array with a for loop

INSTRUCTIONS

- Declare and initialize a variable total to 0.
- Use a for loop to add the value of each element of the myArr array to total.

- The variable myArr is already assigned.
- Declare and initialize total = 0;
- use a for loop for the length of myArr (for (let i=0; i<myArr.length; i++)
- Add value of each myArr element to total (total = total + myArr[i]).

```JS
const myArr = [2,3,4,5,6]
total = 0;
for (let i=0; i < myArr.length ; i++) {
  total += myArr[i];
}
```

- total += myArr[i] is total = total + myArr[i].
- This will send the value of each myArr element to 'total' and add the next element in line as it iterates through the array.

### Nesting for loops

INSTRUCTIONS

- Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

- Nest two for loops to iterate through the outer array (i) and inner sub-arrays (j).
- The for loops will send each of the values in the arrays and its sub-arrays to the product variable. Multiply resulting product by each following values of the array elements ```(arr[i][j])```.

```JS
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i=0; i<arr.length; i++) {
  for (let j=0; j<arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

#### do...while loops

- do...while loops behave similar to other types of loops.
- The difference is that it ensures that the command specified in the initial 'do' statement will run at least once.

```JS
const myArr = [];
let i = 5;

while (i < 5) {
  myArr.push(i);
  i++;
}
```

- The above code will fail to run on the first pass since i is not less than 5, and myArr will remain an empty array ([]).

```JS
const myArr = [];
let i = 5;

do {
  myArr.push(i);
  i++;
} while (i < 5);
```

- The above code is similar to the while loop. But the command specified in the do statement will ensure that the function runs at least once.
- It will push (i) to myArr, and stop running when it reaches the while statement since i is not less than 5. Therefore the result of myArr will be [5] and 'i' will be equal to 6.

### RECURSION

- I'd have to say this is the most difficult concept to grasp to this point in JS.

Based on what I understand so far

- recursion is a technique where function calls itself in order to solve a problem.
- As the function calls itself repeatedly, it breaks down the problem in to smaller pieces, until a base case (a condition at which point the function stops calling itself) is reached.
- Recursion must have a base case in place, or else it will never stop executing.

### JavaScript Algorithms and Data Structures - Profile Lookup

INSTRUCTIONS

- We have an array of objects representing different people in our contacts lists.

- A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

- The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
  - Use a for loop to go through the contacts list. Since the contacts list is nested in an array, assign a variable to iterate through the array.

    ```JS
    for (let i = 0; i < contacts.length; i++)
    ```

  - Use if...else statement to find out if the name passed through the function is found in the contacts list, and another nested if statement to find out if the contacts in that specific array element contains the property (prop) passed through the function.
  
    ```JS
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
      }
    }
    ```

- If both are true, then return the "value" of that property. Return the value of the property (prop) of the specific name in the array element ```(contacts[i])```
  
  ```JS
  return contacts[i][prop];
  ```

- If name does not correspond to any contacts then return the string No such contact. If the name passed through the function is not found in the contacts list, it means that the property (prop) is non-existent as well. This return statement should be left outside of the for loop, meaning that if the specified name is not found in the contact list from top to bottom, it will return "No such contact" to terminate the function.

```JS
return "No such contact"; // outside of for loop //
```

- If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. After the two if statements and its return statement, add an 'else' statement to return "No such property" in the case that the name passed through the function is found in the contacts list but the second if statement (the hasOwnProperty) returns 'false.

```JS
} else {
  return "No such property";
}
```

#### Generating random fractions

- You can use Math.random() function to generate random fractions between 0 (inclusive) and 1 (exclusive). This means that the function can return 0 but never 1.

```JS
function randomFraction() {
  return Math.random();
}
```

- The above function will return a random fraction between 0 and 1.

#### Generating random whole numbers

- Use Math.random() to generate a random fraction.
- Multiply the random fraction by a larger whole number.
- Use Math.floor() round the number down to the nearest whole number.
- Remember, the function executes from inside the brackets outwards.

```JS
function randomWholeNumber() {
return Math.floor(Math.random() * 50);
}
```

- Multiplying the random decimal by 50 will generate a random whole number between 0 and 49.

#### Generating random whole numbers within a range

- Use the following formula to generate a random whole number between defined max and min values.

```JS
function randomRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

- ```((max - min + 1) + min)``` portion of the formula ensures that the random number generated falls within the defined range.
- For example, if min is 5 and max is 10, (max-min+1) will equal 6, which will make the random number fall between 0 and 5.99.
- But if we add the min value to the result, it will shift the range of numbers to fall within the defined range, which is 5 and 10 (inclusive, since the shifting will make the final result 11).

#### parseInt function

- parseInt() will parse (interpret) a string value to an integer.

```JS
function convertToInteger(str) {
  return parseInt(str);
}
```

- The above function will parse a string value, such as "89" to the number value '89'.
- If the first character of the string value can't be converted to a number, it will return NaN (Not a Number).

### RADIX

- Another concept that I am very unfamiliar with.
- Radix, also known as base in mathematics, is the number of unique digits or symbols used to represent numbers in a positional numeral system.
  The most common base used is base 10. Other common bases include base 2 (binary), base 8 (octal), and base 16 (hexadecimal).

```JS
function convertToInteger(str) {
  return parseInt(str, radix);
}
```

- The above function will pass a string value and return a value parsed based on the radix (base) value defined.

#### Ternary (conditional) operator

- Think of it as a 'one-line' if...else statement. Simpler and more efficient.
- The syntax is ```a ? b : c```. Where 'a' is the condition, 'b' is the code to run when condition is 'true', and 'c' is the code to run when the condition is 'false'.

For example,

```JS
function checkEqual(a, b) {
  if (a === b) {
    return "Equal";
  } else {
    return "Not Equal";
  }
}
```

The above code can be re-written using a ternary operator.

```JS
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```

#### Multiple Ternary operators

- Ternary operators can be chained to execute multiple commands based on various conditions, similar to if, else if, and else statements.

```JS
function checkSign(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else if (num === 0) {
    return "zero";
  } else {
    return "undefined";
  }
}
```

- The above function can be written using multiple ternary operators.

```JS
function checkSign(num) {
 return num > 0 ? "positive"
   : num < 0 ? "negative"
   : num === 0 ? "zero"
   : undefined
}
```

- It is best practice the separate each line when using multiple conditions for purposes of readability.

### JavaScript Algorithms and Data Structures - Recursion Countdown

INSTRUCTIONS

- We have defined a function called countdown with one parameter (n).
- The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
- For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
- Your function must use recursion by calling itself and must not use loops of any kind.

- If the function is called with a number less than 1, the function should return an empty array.
  - This will be the base case. When it is reached, the function will stop calling it self.
  
  ```JS
  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const myArr = countdown(n - 1);
      myArr.unshift(n);
      return myArr;
    }
  }
  ```

  - When the base case is reached, it will return an empty array in to which the returned numbers that are stored in the call stack will be re-entered, last-in-first-out (LIFO).
  - The commands under the else statement will be executed until the base case is reached.
  - Declare a variable (myArr) to assign to the empty array returned when the base case is reached.
  - Modify the 'n' value so that it decreases by 1 every time it runs through the command.
  - unshift the returned 'n' values to myArr. Last in first out. The sequence of the 'n' values stored in the call stack would be 10, 9, 8 ... until it reaches 1. The "unshifted" sequence of 'n' values returned to myArr would be 1, 2, 3, 4, 5...10. But since it's 'unshift', the first number returned to myArr will be pushed to the end of the array. As a result ```[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]```

- NOTE TO SELF: Do not confuse shift and unshift. shift will remove the first element of an array. unshift will enter an element to the beginning of an array.
  shift - out. unshift - in.

### JavaScript Algorithms and Data Structures - Recursion range of numbers

  INSTRUCTIONS

- We have defined a function named rangeOfNumbers with two parameters.
- The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter.
- Your function must use recursion by calling itself and not use loops of any kind.
- It should also work for cases where both startNum and endNum are the same.

- The starting number will always be less than or equal to the ending number.
- Apply the same logic used for the recursion countdown.

```JS
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
    } else {
      const myArr = rangeOfNumbers(startNum, endNum - 1);
      myArr.push(endNum);
      return myArr;
    }
  }
```

- 'starting number will always be less than or equal to the ending number' almost threw me off.
  If I took this literally, I would have made the base case ```if (endNum <= startNum)``` which will stop the recursion and return an empty array when startNum = endNum. In result, the startNum will not be included in the array. The recursion needs to run until startNum is greater than the endNum to include the startNum in the array.
