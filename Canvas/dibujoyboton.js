var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("Dibujito_13");
var ancho = d.width;
var d2 = document.getElementById("Dibujito_14");
var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick()
{
  var xxx = parseInt(texto.value);
  console.log(xxx);
  var lineas = xxx;
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
        xf = espacio * (l + 1);
        yi = espacio * l;
        dibujarLinea("#AAF", 0, yi, xf, 300);
        console.log("linea " + l);
  }
}

var texto2 = document.getElementById("shortcut");
var boton2 = document.getElementById("botoncito2");
boton2.addEventListener("click", dibujoPorClick2 );

function dibujoPorClick2()
{
  var lineas = parseInt(texto2.value);
  var l = 0;
  var yi, xf;
  for(l = 0; l < lineas; l++)
  {
        xf = 10 * (l + 1);
        yi = 10 * l;
        dibujarLinea("#AAF", 0, yi, xf, 300);
        console.log("linea " + l);
  }
}
