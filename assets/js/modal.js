'use strict';

$('.modal').hide()
$('#js-openModal').click(function(){
  $('.modal').fadeIn(350)
  $('#js-buckModal').css("display","none")
})
$('#js-closeModal').click(function(){
  $('.modal').fadeOut(250)
  $('.modal-loading').hide()
  $('.modal-top').show("slow")
})

$('.modal-loading').hide()
$('#js-record-button').click(function(){
  $('.modal-top').fadeOut(250)
  $('.modal-loading').fadeIn(350)
})