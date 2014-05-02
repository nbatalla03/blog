$(function() {
  var originalHeight = "48px"
  var containerHeight = document.getElementById('container-holder').clientHeight;
  var navHeight = document.getElementById('nav-holder').clientHeight;

  $('#action').on('click', function() {
    $('nav').attr('style', 'height:' + containerHeight + 'px;');
    // $('.one-fourth').css('margin-bottom', '1rem');
  });

  $('#revert').on('click', function() {
    $('nav').attr('style', 'height:' + originalHeight + ';');

    // setTimeout(function() {
    //   $('.one-fourth').css('margin-bottom', '2rem');
    // }, 100);
  });
});

$( window ).resize(function() {
  var containerHeight = document.getElementById('container-holder').clientHeight;
  var navHeight = document.getElementById('nav-holder').clientHeight;

  $('#action').on('click', function() {
    $('nav').attr('style', 'height:' + containerHeight + 'px;');
  });

  if (navHeight !== 48) {
    $('nav').attr('style', 'height:' + containerHeight + 'px;');
  }
});

