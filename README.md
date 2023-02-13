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

### JavaScript Algorithms and Data Structures - Stand in Line

INSTRUCTIONS

- Write a function 'nextInLine' which takes an array (arr) and a number (item) as arguments.
- Add the number to the end of the array, then remove the first element of the array.
  - Use .push to add the number to the end of the array, and use .shift to remove the first element of the array.
  
- The nextInLine function should then return the element that was removed.
  - Assign a const variable for arr.shift() as removed to store the removed number, then return the removed variable.

#### Note to self

- True and False in terms of Booleans are not strings.

### Comparison Operators

- == equality operator
- === strict equality operator: Does not convert data types
- != inequality operator
- !== strict inequality operator: Does not convert data types
- > greater than operator
- > greater than or equal to operator
- < less than operator
- <= less than or equal to operator
- && logical And operator
- || logical Or operator

### JavaScript Algorithms and Data Structures - Golf Code

INSTRUCTIONS
Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

```>
Strokes Return
1         "Hole-in-one!"
<= par - 2 "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3 "Go Home!" 
```

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

- Use if...else statements to return specific strings based on the comparison between par and number of strokes.
- Use strict equality operators where applicable (hole in one, par...)

### JavaScript Algorithm and Data Structure - Counting Cards

INSTRUCTIONS

In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

```>
Count Change Cards
+1 2, 3, 4, 5, 6
0 7, 8, 9
-1 10, 'J', 'Q', 'K', 'A'
```

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

- Use a switch statement to determine what to return based on which cards.
- Omit any cases for cards 7,8,9 since it will have no effect on the count.

- 1st proposed solution does not work.
- remember to use '+' for returning values, rather than using a ','.
- Using 'return count++' and 'return count--' will reset the count to zero, which is not the intended code. Remove 'return'.
- Still don't quite understand the concept of 'return'.

#### Alternate solution using if...else statement

- if card value is less than or equal to 6, add 1 to count.
- else if card value is greater than or equal to (>=) "10" (not number '10'), subtract count by 1.
  - if...else statement uses strict equality for comparison by default. Using greater than equal (>=) in the function overrides the default rule.
  - Using string "10" instead of number '10' as card value because we need to take into account for 'J', 'Q', 'K', and 'A', which are strings. Using greater than equal to (>=) for comparison will convert the data type. This means that if we pass any other letters into the string value (such as 'O', 'H', 'F', etc... which are not card values in this case), it will still recognize it as a string value and return '-1 Hold'.
- After counting the cards, use ternary expression count + (count > 0 ? " Bet" : " Hold").
  - This will return the count value based on the card value passed and the string " Bet" or " Hold" based on the the condition (count>0). If the count value is greater than 0 (True), it will return '1 Bet'. If the count value is 0 or less than 0(False), it will return '0 Hold' or '-1 Hold'.

- The if...else statement with the ternary value seems more readable and efficient compared to the switch statement (which I still don't quite understand).

### Building JavaScript Objects

- Similar to arrays. Access and modify data using 'Properties' rather than indexes.
  
  PSEUDO-CODE

```JS
  const x = {
    "prop1": "value1",
    "prop2": "value2",
    "prop3": "value3"
  }
  ```

- Properties are stored as strings. It does not need to be, but JS will automatically typecast them as strings.
- Separate each group of prop and value using commas, with the exception of the final prop and value.

#### Accessing objects using dot notation / bracket notation

- use dot notation when you know the name of the property you are trying to access.

```JS
const x= {
  "prop1" = "value1",
  "prop2" = "value2"
}

const prop1Value = x.prop1;
const prop2Value = x.prop2;
```

- use bracket notation when the property you are trying to access has a space in its name.
- It can still be used for property names without a space in its name.

```JS
const x= {
  "prop one" = "value1",
  "prop two" = "value2"
}

const oneValue = x["prop one"];
const twoValue = x["prop two"];
```

#### Accessing object properties with variables

- used to access a property which is stored as a value of a variable.
- Do not use quotes around the variable since it's not the value.

```JS
const x = {
  "prop1": "value1",
  "prop2": "value2",
  "prop3": "value3"
}

const myX = "prop2";
const myY = x[myX];
console.log(myY);
```

The above will display "value2"

#### Updating/Adding object properties

- You can update or add object properties using dot or bracket notation.

```JS
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
```

Change or add the object property by using the following.

```JS
myDog.name = "Change/add the value";
```

or

```JS
myDog["name"] = "Change/add the value";
```

#### Delete object properties

- in the same manner as changing or adding object properties. Just do not assign a value do it.

```JS
delete myDog.bark; || delete myDog[bark];
```

### Using Objects for Lookups

INSTRUCTIONS

- Convert the switch statement into an object called lookup.
  - This is self explanatory.

- Use it to look up val and assign the associated string to the result variable.
  - This had me confused for a bit. My trouble with JavaScript is figuring out what to use for property, what is the value, which function is pointing to where, where is the return value going, etc.
  - "Use it(object "lookup") to look up val"
    - So it should be

      ```JS
      lookup[val] 
      ```

    - Not dot notation since I'm looking for a variable, and no strings since it's not a value.
    - Where should this be assigned? "Assign the associated string (the value that is looked up) to the result variable. So, in other words, assign the value that is looked up to the result variable.

    ```JS
    result = lookup[val];
    ```

### Testing objects for properties

- Use .hasOwnProperty(propname) to determine if the property in question has the given property name. This method returns True or False.

    INSTRUCTIONS
  - Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp).
  - If the property is found, return that property's value. If not, return "Not Found".
- use if...else statement to determine if obj.hasOwnProperty(checkProp) is true or false.
  
  ```JS
  if (obj.hasOwnProperty(checkProp)) {
  }
  ```

  - If true, return the value assigned to 'checkProp' within the object (obj). Remember to use bracket notation.
  
  ```JS
  return obj[checkProp];
  ```

  - If false (else), return "Not Found".
  
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
