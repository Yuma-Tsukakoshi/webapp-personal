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

let $decideloading;
$('input[name="color"]').change(function(){
  let $TodoColor = $('input[name="color"]').val() 
  $('.input-values-wrappper').css("background-color",$TodoColor)
});
$('input[name="Todo"]').change(function(){
  let $TodoTodo = $('input[name="Todo"]').val()
  $('#input-value-Todo').text($TodoTodo)
})
$('#category').change(function(){
  let $TodoCategory = $('#category').val()
  $('#input-value-category').text($TodoCategory)
})
$("#decide-button").click(function(){
  $decideloading = setTimeout(function(){
    $('.modal').fadeOut(250),
    $('#Todo-textarea').append($('#js-input'))
  },1500)
})

//投稿後の初期化  //ツイート機能
const checkbox = document.querySelectorAll(".checkbox");
const InputTexts = document.querySelectorAll(".text");
const tweetArea = document.getElementById("tweet-area");
const shareTweet = document.querySelector(".js-twitter");

const unChecked = (checkbox) => {
  checkbox.forEach((checkbox) => {
    checkbox.checked = false;
  });
}; 

const Textclear = (InputTexts) => {
  InputTexts.forEach((text) => {
    text.value = "";
  });
}; 

const tweet = () => {
  if (shareTweet.checked) {
    const tweetText = `${tweetArea.value}`;
    window.open(
      `http://twitter.com/intent/tweet?&text=${tweetText}`
    );
  }
}; 