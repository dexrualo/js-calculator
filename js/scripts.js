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
        console.log(/[+×÷−]/.test($(".main").text()[$(".main").text().length]-1));
        if (/[+−×÷]/.test($(".main").text()[$(".main").text().length]-1))
          console.log("Ayos!");
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
