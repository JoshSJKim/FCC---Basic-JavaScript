// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicage",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");

/*   Convert the switch statement into an object called lookup. 
Use it to look up val and assign the associated string to the result variable.*/

