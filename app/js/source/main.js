(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#btnAdd').click(add);
    $('#btnSub').click(subtract);
    $('#btnMul').click(multiply);
    $('#btnDiv').click(divide);
  }

  function add() {
    var values = getNumbers();
    var sum = values[0] + values[1];
    display(sum);
  }

  function subtract() {
    var values = getNumbers();
    var difference = values[0] - values[1];
    display(difference);
  }

  function multiply() {
    var values = getNumbers();
    var product = values[0] * values[1];
    display(product);
  }

  function divide() {
    var values = getNumbers();
    var quotient = values[0] / values[1];
    display(quotient);
  }

  function getNumbers(){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return [x, y];
  }

  function display(answer){
  $('#answer').text(answer);
  }


})();
