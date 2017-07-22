var num = "";
var var1 = 0;
var fx = "";

$(function() {
  $("button").click(function() {
    var v = $(this).attr("value"); // get value;

    console.log(v);
    switch(v) {
      case "ac" : clear(); break;
      case "ce" : clear(); break;
      case "+" : sum(); break;
      case "=" : equal(); break;
      case "-" : minus(); break;
      case "*" : multiply(); break;
      default :
        num=num+v;
        $("#display").html(num);
    }
//    $("#display")
  });
});

function clear() {
  console.log("clear");
  $("#display").html("");
  num="";
  var1 = 0;
}

function sum() {
//  var a = parseInt(var1);
  var1+=parseInt(num);
  num = "";
  fx = "plus";
  console.log(var1);
  console.log("iranplus");
}

function minus() {
  if (var1 == 0){
    var1 += parseInt(num);
  }
  else{
    var1 -= num;
  }
  num = "";
  fx = "minus";
    console.log("iranminus")
}
function multiply() {
  if (var1 == 0){
    var1 = parseInt(num);
  }
  else{
    var1 *= parseInt(num);
  }
  num = "";
  fx = "multiply";
  console.log("mult");
  console.log(num);
  console.log(var1);

}

function equal() {
  switch (fx){

    case "plus":
      var1 += parseInt(num);
      console.log("plus");
      console.log(num);
      console.log(var1);
      ans = var1.toString();
      $("#display").html(ans);
//      var1 = 0
      break;

    case "minus":
      var1 -= parseInt(num);
      console.log("minus");
      console.log(num);
      console.log(var1);
      ans = var1.toString();
      $("#display").html(ans);
      break;

    case "multiply":
      var1 *= parseInt(num);
      console.log("multiply");
      console.log(num);
      console.log(var1);
      ans = var1.toString();
      $("#display").html(ans);
      break;
  }
}
