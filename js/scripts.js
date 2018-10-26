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
  var indexZero = functionArray.indexOf(0);
  var indexOne = functionArray.indexOf(1);
  if (input % 3 === 0)
  var indexThree = functionArray.indexOf(3);

  return "zero @: " + indexZero + "<br>one @: " + indexOne + "<br>three @: " + indexThree;

  return functionArray;

}

var moneyMaker = function(input) {
  var functionArray = incrementInput(input);

  functionArray.forEach(function(arrayItem) {
    /*sets variable to result of indexOf of '0'. If zero is present, will return "Beep"    */
    var beepBoopCheck = toString(arrayItem).indexOf(0);
    switch (beepBoopCheck) {
      case "-1":
      arrayItem = "Beep!";
      break;

      default:
      break;

    }
  });

  return functionArray;
}



// client-side code:
$(document).ready(function(){
  $("#boopForm").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var userOutput = moneyMaker(userInput);

    $("#boopOutput").text(userOutput);


  });
});
