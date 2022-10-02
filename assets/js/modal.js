'use strict';

$('#js-openModal').click(function(){
  $('.overlay').addClass('openModal')
  $('#js-buckModal').css("display","none")
})
$('#js-closeModal').click(function(){
  $('.overlay').removeClass('openModal')
})