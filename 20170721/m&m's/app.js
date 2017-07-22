var entry = '';
$(function() {
    $("button").click(function() {
        entry += $(this).attr("value");
        $("#display").html(entry);
  });
});
