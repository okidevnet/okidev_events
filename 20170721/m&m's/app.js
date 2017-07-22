var entry = '';
$(function() {
    $("button").click(function() {
        if ($(this).attr("value") == "ac") {
            entry = "";
        } else if ($(this).attr("value") == "tax") {
            entry = eval(entry);
            entry = entry * 1.08;
            // 切りあげ
            entry = Math.ceil(entry);
        } else if ($(this).attr("value") != "=") {
            entry += $(this).attr("value");
        } else {
            entry = eval(entry);
        }
        $("#display").html(entry);
  });
});
