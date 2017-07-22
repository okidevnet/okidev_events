var item=0,
	operator;

$(function() {
  $("button").click(function() {
    var val = $(this).attr('value');
    var pattern = '0123456789.';
    var displayed_num = $("#display").html();

    //numbers
    if(pattern.indexOf(val) != -1){
    	(val=='.'&&displayed_num.indexOf(".") !=-1)? null:$("#display").html(displayed_num+val);
    }else{
    //others
    	if(val=='='){
			switch(operator){
				case '+': $("#display").html(Number(item)+Number(displayed_num));break;
				case '-': $("#display").html(Number(item)-Number(displayed_num));break;
				case '/': $("#display").html(Number(item)/Number(displayed_num));break;
				case '*': $("#display").html(Number(item)*Number(displayed_num));break;
			}
    	}else{
			operator=val;
			item = $("#display").html();
			$("#display").html('');
    	}

    	if(val=='ac'||val=='ce')$("#display").html('');
    }

  });
});
