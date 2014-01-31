"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var sol;
  var element= document.getElementById("original");
  var temp = element.value;
  var reg = /[+-]?(\d+)(?:\.\d*)?\s*([FfCc])/;
  
  var ex = temp.match(reg);
  
  if (ex) {
    var num = ex[0];   // Se podría coger 0 o 1 ya que despues lo convertimos a float.
                       // Si usamos 0 que es la cadena con la letra inclusive, la quitamos más adelante con la convercion.
    var type = ex[2];  // La letra del tipo de grado 
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      sol = (num * 9/5)+32;
      sol = sol.toFixed(1) + "F";
    }
    else {
      sol= (num - 32)*5/9;
      sol= sol.toFixed(1) + "C";
    }
    converted.innerHTML = sol;
  }
  else {
    converted.innerHTML = "WRONG! Try again.";
  }
}
  