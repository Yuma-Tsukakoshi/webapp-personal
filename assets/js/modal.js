'use strict';

$('.modal').hide()
$('#js-openModal').click(function(){
  $('.modal').fadeIn(400)//ここと入れ替える
  $('#js-buckModal').css("display","none")
  // $('.overlay').addClass('openModal')
})
$('#js-closeModal').click(function(){
  $('.modal').fadeOut(400)//ここと入れ替える
  //$('.overlay').removeClass('openModal')
})