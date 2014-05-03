$(function() {
  var showOrHide = true;

  $('.show').on('click', function() {
    $('.overlay').toggle('slow');

    if (showOrHide) { 
      $('#guide').css('color', '#ff1b3b');
      showOrHide = false;
    } else {
      $('#guide').css('color', '#00a2ff');
      showOrHide = true;
    }
  });
});

