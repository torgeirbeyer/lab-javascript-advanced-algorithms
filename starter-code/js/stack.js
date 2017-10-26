$(document).ready(function() {

  stack = new StackDataStructure();

  for (var i = 0; i < stack.MAX_SIZE; i++) {
    $('.stack').prepend("<div class='col-lg box empty-box'></div>");
  }

  $('#add').click(function() {
    if (stack.push($('#input-text').val()) != "Stack Overflow") {
      $('.empty-box:last').text($('#input-text').val()).toggleClass('active empty-box');
    } else {
      alert('STACK OVERFLOW');
    }
  });

  $('#remove').click(function() {
    if (stack.pop() !== 'Stack Underflow') {
      $('.active:first').text('').toggleClass('active empty-box');
    } else {
      alert('STACK UNDERFLOW');
    }
  });


});
