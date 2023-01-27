# FCC---Basic-JavaScript

## Understanding Basic JavaScript

- I will be going through the Basic JavaScript course on freeCodeCamp and documenting parts and concepts that I find difficult to comprehend.

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
