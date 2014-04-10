(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#btn').click(findSum);
  }

  function findSum(){
    var x = $('#num1').val();
    var y = $('#num2').val();
    $('#sum').text(parseInt(x)+parseInt(y));
  }



})();
