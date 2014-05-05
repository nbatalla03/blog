$(function() {
  var showOrHide = true;

  $('[data-id-circle-animation]').on('click', function() {
    $('.overlay').toggle('slow');

    if (showOrHide) {
      $('#guide').css('color', '#ff1b3b');
      showOrHide = false;
    } else {
      $('#guide').css('color', '#9dd45c');
      showOrHide = true;
    }
  });
});


window.Alignment = {
  showGradients: function() {
    $('[data-id=overlay]').toggle('slow');
  }
};
