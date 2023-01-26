// Alternate solution using if...else statement and ternary expression
let count = 0;

function cc(card) {
  // Only change code below this line
if (card <= 6) {
  count++;
 } else if (card >="10") {
  count--;
 }

  return count + (count > 0 ? ' Bet' : ' Hold');
  // Only change code above this line
}

console.log(cc('O'));