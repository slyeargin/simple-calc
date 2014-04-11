(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#btnAdd').click(add);
    $('#btnSub').click(subtract);
    $('#btnMul').click(multiply);
    $('#btnDiv').click(divide);
    $('#btnExp').click(exponent);
    $('#btnSqrt').click(squareRoot);
    $('#btnFact').click(factorial);

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

  function exponent(){
    var values = getNumbers();
    var exp = Math.pow(values[0],values[1]);
    display(exp);
  }

  function squareRoot(){
    var values = getNumbers();
    var sqrt = Math.sqrt(values[0]);
    display(sqrt);
  }

  function factorial() {
    var values = getNumbers();
    var fact;
    findFactorial(values[0]);
    function findFactorial(x) {
      if (x===0){
        return 1;
      }
      fact = x * factorial(x-1);
      return fact;
    }
    display(fact);
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
