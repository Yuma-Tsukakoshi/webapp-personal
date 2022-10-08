'use strict';

$('.exam-list').hide();
$('.exam-slidedown').mouseover(function() {
  $('.exam-list').slideDown();
  });
$('main').mouseover(function() {
  $('.exam-list').slideUp(200);
  });
$('.machine-list').hide();
$('.machine-slidedown').mouseover(function() {
  $('.machine-list').slideDown();
})
$('main').mouseover(function() {
  $('.machine-list').slideUp(200);
  });

$('.box.timer').click(function(){
  $('.stop-watch').fadeToggle("slow");
})

let $TodoColor = $('#color').value 
console.log($TodoColor)
let $TodoTodo = $('#Todo').value
let $TodoCategory = $('#input-value-category').value
let $decideloading;
$("#decide-button").click(function(){
  $('.input-values-wrappper').css("background-color",$TodoColor)
  $('#input-value-Todo').text($TodoTodo)
  $('#input-value-category').text($TodoCategory)
  $decideloading = setTimeout(function(){
    $('.modal').fadeOut(250)
  },1500)
})
