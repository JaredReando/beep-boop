// var incrementInput = function (input) {
//   var incrementArray = [];
//   for(i=0; i <= input; i++) {
//     incrementArray.push(i);
//   }
//   console.log(incrementArray);
//   return incrementArray;
// }
//
// var findOne = function (input) {
//   var functionArray = incrementInput(input);
//   var indexZero = functionArray.indexOf(0);
//   var indexOne = functionArray.indexOf(1);
//   if (input % 3 === 0)
//   var indexThree = functionArray.indexOf(3);
//
//   return "zero @: " + indexZero + "<br>one @: " + indexOne + "<br>three @: " + indexThree;
//
//   return functionArray;
//
// }



var beepBoop = function(input) {
// Takes user input number and creates an array with all integers between '0' and input#:
  var incrementArray = [];
  for (var i = 0; i <= input; i++) {
    incrementArray.push(i);
  }

  var beepBoopArray = [];

  for (var i = 0; i < incrementArray.length; i++) {
    // checks if input number is divisible by 3 and is not '0'
    if (incrementArray[i] % 3 === 0 && incrementArray[i] !== 0) {
      beepBoopArray.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.");
      // converts array element to string, then back to array as separate elements, then checks for "1" value
    } else {
      beepBoopArray.push(incrementArray[i]);
    }
  }

    return beepBoopArray;

};






// client-side code:
$(document).ready(function(){
  $("#boopForm").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var userOutput = beepBoop(userInput);

    $("#boopOutput").text(userOutput);


  });
});
