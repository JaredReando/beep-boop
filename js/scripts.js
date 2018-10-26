var incrementInput = function (input) {
  var incrementArray = []
  for(i=0; i <= input; i++) {
    incrementArray.push(i + " ");
  }
  return incrementArray;
}







// client-side code:
$(document).ready(function(){
  $("#boopForm").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var userOutput = incrementInput(userInput);

    $("#boopOutput").text(userOutput);


  });
});
