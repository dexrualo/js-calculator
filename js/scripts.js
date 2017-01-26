function lastIsDigit(){

}
function lastIsSymbol(str){
   return /[+−×÷]/.test(str.slice(-1)[0])
}
function deleteLast(str, newVal){
  return str.slice(0,str.length-1);
}
$(document).ready(function(){
  $(".button").click(function(){
    console.log($(this).text().charCodeAt(0));
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
        if ($(".main").text() == "0")
          $(".main").text("");
        break;
      case "0":
        if ($(".main").text() == "0")
          $(".main").text("");
        break;
      case "+":
        if ($(".main").text() == "")
          return;
        if (lastIsSymbol($(".main").text()))
          $(".main").text(deleteLast($(".main").text(),$(this).text()));
        break;
      case "−":
        if ($(".main").text() == "")
          return;
        break;
      case "=":
        if ($(".main").text() == "")
          return;
        break;
      case "×":
        if ($(".main").text() == "")
          return;
        break;
      case "÷":
        if ($(".main").text() == "")
          return;
        break;
      case "AC":
        $(".main").text("");
        $(".sub").text("");
        return;
    }
    $(".main").text($(".main").text() + $(this).text());
  });
});
