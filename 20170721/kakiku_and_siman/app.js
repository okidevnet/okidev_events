var right_number = "";
var expr = [];

$(function () {
    $("button").click(function () {
        // 押されたボタンの value　に入っている値を取ってくる
        var value = $(this).attr("value");

        console.log("value = ", value);

        // 数値かどうかを判定 (isNaN は与えられた文字列が数値かどうかを判定)
        if (isNaN(value)) {
            console.log(value + " is not num.");

            switch(value) {
                case "+":
                    expr.push(right_number, "+");
                    break;
                case "-":
                    expr.push(right_number, "-");
                    break;
                case "*":
                    expr.push(right_number, "*");
                    break;
                case "/":
                    expr.push(right_number, "/");
                    break;
                case "=":
                    expr.push(right_number);
                    console.log(expr);
                    expr = [eval(expr.join(' '))];
                    break;
                case "ac":
                    expr = [];
                    console.log("All Clear!!!");
                    break;
                case "ce":
                    right_number = "";
                    break;
                default:
            }

            $("#display").html(expr.join(' '));
            right_number = "";
        } else {
            right_number += value;
            console.log(value + " is num.");

            $("#display").html(expr.join(" ") + " " + right_number);
        }

        console.log(expr);
    });
});
