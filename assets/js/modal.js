'use strict';

$('.modal').hide()
$('.modal-Todo').hide()
$('#js-buckModal').hide()

$('#js-openModal').click(function(){
  $('.modal-Todo').hide()
  $('.modal').fadeIn(350)
})
$('#js-Todo-button').click(function(){
  $('.modal').fadeIn(350)
  $('.modal-top').hide()
  $('.modal-Todo').fadeIn(350)

})
$('#js-closeModal').click(function(){
  $('.modal').fadeOut(250)
  $('.modal-loading').hide()
  $('.modal-post').hide()
  $('.modal-top').show("slow")
})

$('.modal-post').hide()
$('.modal-loading').hide()
$('.modal-post').hide()
let $Timeloading;
$('#js-record-button').click(function(){
  $('.modal-top').fadeOut(250)
  $('.modal-loading').fadeIn(350)
  $Timeloading = setTimeout(function(){
    $('.modal-loading').fadeOut(250);
    $('.modal-post').fadeIn(1000);
  },3000);
})
$('#js-study-date').click(function(){
  $('.modal-top').fadeOut(250)
  $('#js-closeModal').fadeOut(250)
  $('#js-buckModal').fadeIn(350)
})
$('#js-buckModal').click(function(){
  $('.modal-top').fadeIn(350)
  $('#js-closeModal').fadeIn(350)
  $('#js-buckModal').fadeOut(250)
})
