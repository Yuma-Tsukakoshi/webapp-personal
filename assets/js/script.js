'use strict';

$('.exam-list').hide();
$('.exam-slidedown').mouseover(function() {
  $('.exam-list').slideDown();
}).mouseout(function(){
  $('.exam-list').slideUp();
});
$('.machine-list').hide();
$('.machine-slidedown').mouseover(function() {
  $('.machine-list').slideDown();
}).mouseout(function(){
  $('.machine-list').slideUp();
});
// 改善点：mouseout時にli要素全体にかかっていない
//slideDownで要素幅よりも大きくして出して固定したい
//周りも一緒に動いちゃう→headerの高さが決まっちゃってる
//
