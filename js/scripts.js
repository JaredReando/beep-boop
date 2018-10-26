// BUSINESS LOGIC:
var beepBoop = function(input) {
  // Returns message if user input not a number:
  if(isNaN(input)) {
    return "Sorry! That's not a number I can Boop.";
  }

// Takes user input number and creates an array with all integers between '0' and input#:
  var incrementArray = [];
  for (var i = 0; i <= input; i++) {
    incrementArray.push(i);
  }

// Performs check of all integers in 0 - input# array. Replaces integers with beep-boop response based on chosen rules:
  var beepBoopArray = [];
  for (var i = 0; i < incrementArray.length; i++) {
    // checks if input number is divisible by 3 and is not '0'
    if (incrementArray[i] % 3 === 0 && incrementArray[i] !== 0) {
      beepBoopArray.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.");
      // converts array element to string, then back to array as separate elements, then checks for "1" value
    } else if (incrementArray[i].toString().split("").includes("1")) {
      beepBoopArray.push(" " + "Boop!");
      // converts array element to string, then back to array as separate elements, then checks for "2" value
    } else if (incrementArray[i].toString().split("").includes("0")) {
      beepBoopArray.push(" " + "Beep!");
    } else {
      beepBoopArray.push(" " + incrementArray[i])
    }
  }

    return beepBoopArray;

};

// CLIENT LOGIC:
$(document).ready(function(){

  $("#boopResult").hide();

  $("#boopForm").submit(function(event){
    event.preventDefault();
    // Resets "hide" of results if user re-submits another input. This is so the slide animation occurs for each re-submission
    $("#boopResult").hide();

    var userInput = $("input#userInput").val();
    var userOutput = beepBoop(userInput);

    $("#boopOutput").text(userOutput);

    $("#boopResult").slideDown();

  });
});
