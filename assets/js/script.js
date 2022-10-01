'use strict';

$('.exam-list').hide();
$('.exam-slidedown').mouseover(function() {
  $('.exam-list').slideDown();
  });
$('main').mouseover(function() {
  $('.exam-list').slideUp();
  });
$('.machine-list').hide();
$('.machine-slidedown').mouseover(function() {
  $('.machine-list').slideDown();
})
$('main').mouseover(function() {
  $('.machine-list').slideUp();
  });
