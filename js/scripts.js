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
        break;
      case "0":
        break;
      case "+":
        break;
      case "-":
        break;
      case "=":
        break;
      case "xD7":
        console.log("u00D7" + " success!");
        break;
      case "xF7":
        console.log("u00F7" + " success!");
        break;
      case "AC":
        $(".main").text("");
        $(".sub").text("");
        return;
    }
    $(".main").text($(".main").text() + $(this).text());
  });
});
