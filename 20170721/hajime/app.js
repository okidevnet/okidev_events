$(function() {
  $("button").click(function() {
    $("#display").html($(this).attr("value"));
  });
});
