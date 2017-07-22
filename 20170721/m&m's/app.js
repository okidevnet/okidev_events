var entry = '';
$(function() {
    $("button").click(function() {
        if ($(this).attr("value") != "=") {
            entry += $(this).attr("value");
        } else {
            entry = eval(entry);
        }
        $("#display").html(entry);
  });
});
