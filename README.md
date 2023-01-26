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

```
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

```
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
-
