function toJSEquation(equation) {
  return equation.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-");
}
function lastIsSymbol(str){
   return /[+−×÷]/.test(str.slice(-1)[0]);
}
function deleteLast(str, newVal){
  return str.slice(0,str.length-1);
}
$(document).ready(function(){
  $(".button").click(function(){
    if (/=/.test($(".main").text()))
      $(".main").text("");
    switch ($(this).text()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        if ($(".main").text() == "0")
          $(".main").text("");
        if (/[+−×÷]0/.test($(".main").text().slice(-2)))
          $(".main").text($(".main").text().slice(0,-1));
        $(".main").text($(".main").text() + $(this).text());
        $(".sub").text(eval(toJSEquation($(".main").text())));
        break;
      case "−":
      case "×":
      case "÷":
      case "+":
        if ($(".main").text() == "")
          return;
        if (lastIsSymbol($(".main").text()))
          $(".main").text(deleteLast($(".main").text(),$(this).text()));
        $(".main").text($(".main").text() + $(this).text());
        break;
      case "=":
        if ($(".main").text() == "")
          return;
        if (lastIsSymbol($(".main").text()))
          $(".main").text(deleteLast($(".main").text(),$(this).text()));
        $(".sub").text(eval(toJSEquation($(".main").text()))).animate({
          fontSize: "1.5em",
          fontWeight: "bold"
        });
        $(".main").slideUp(function(){
          $(this).text(eval(toJSEquation($(".main").text())));
          $(".sub").text("");
          $(this).show();
        });
        return;
        break;
      case ".":
        if (/\./.test($(".main").text()))
          return;
        if ($(".main").text() == "")
          $(".main").text("0");
        $(".main").text($(".main").text() + $(this).text());
        break;
      case "AC":
        $(".main").text("");
        $(".sub").text("");
        return;
    }
  });
});
