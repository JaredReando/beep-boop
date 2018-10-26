var incrementInput = function (input) {
  var incrementArray = [];
  for(i=0; i <= input; i++) {
    incrementArray.push(i);
  }
  console.log(incrementArray);
  return incrementArray;
}

var findOne = function (input) {
  var functionArray = incrementInput(input);
  var indexZero = .indexOf(0);
  var indexOne = functionArray.indexOf(1);
  var indexThree = functionArray.indexOf(3);

  return "zero @: " + indexZero + "<br>one @: " + indexOne + "<br>three @: " + indexThree;

  return functionArray;

}





// client-side code:
$(document).ready(function(){
  $("#boopForm").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var userOutput = findOne(userInput);

    $("#boopOutput").text(userOutput);


  });
});
