$(document).ready(function(){
  $(".button").click(function(){
    $(".screen").text($(".screen").text() + $(this).text());
  });
});
