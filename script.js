$("button").click(function() {
    // less than 0.5 = heads, more than 0.5 = tails
    let randomNum = Math.random();
    let userGuess = $("input").val();
    // write conditional here
    
    
 if (userGuess === "heads" && randomNum <= 0.5) {
         $(".display").text("You gues correctly!");
     } else if (userGuess === "heads" && randomNum >= 0.5) {
         $(".display").text("You gues incorrectly!");
     } else if (userGuess === "tails" && randomNum <= 0.5) {
         $(".display").text("You gues incorrectly!");
     } else if (userGuess === "tails" && randomNum >= 0.5) {
         $(".display").text("You gues correctly!");
     } else {
//          You can only guess Heads or Tails and greater or less than
          $(".display").text("Error");
         
     }
});
