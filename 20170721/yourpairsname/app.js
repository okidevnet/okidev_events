var a = "";
var b = "";
var c = "";
var d = "";
$(function() {
	
	
  $("button").click(function() {
	a = a + $(this).attr("value");
    $(".window").html(a);
  });

  $("#ac").click(function() {
	a = "";
    $(".window").html(a);
  });

  $("#ce").click(function() {
	a = "CEは現在使われておりません。";
    $(".window").html(a);
  });

  $("#plus").click(function() {
	b = b + a;
	a = "";
  });
	
  $("button").click(function() {
	$(".temp").html(b);
  });
	
  $("#equal").click(function() {
	b = b + a;
	c = b + a 
	d = parseFloat(b);
	$(".window").html(c);
  });

});
