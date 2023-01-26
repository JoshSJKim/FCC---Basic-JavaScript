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

<!--  
Strokes Return
1	        "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!" 
-->

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
