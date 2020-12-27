var d = document.getElementById("Dibujito_12_for");
var lienzo = d.getContext("2d");
var lineas = 31;
var l = 0;
var xi, yi, xf, yf, yyi, xxf, yyyf;
var bordes = "gold";

for(l = 0; l < lineas; l++)
{
    xf = 10 * (l + 1);
    yi = 10 * l;
    yf = 10 * l;
    yyi = 10 * (l + 1);
    xxf = 300 - (l*10);
    xi = 10 * l;
    yyyf = 300 - (l*10);

      dibujarLinea("#AAF", 0, yi, xf, 300);
      dibujarLinea("green", 300, yi, xf, 0);
      dibujarLinea("purple", 150, 0, xf, 300);
      dibujarLinea("purple", 150, 300, xf, 0);
      dibujarLinea("grey", 0, 150, 300, yf);
      dibujarLinea("grey", 300, 150, 0, yf);
      dibujarLinea("#FA5882", 0, yyi, xxf, 0);
      dibujarLinea("#FA5882", xi, 300, 300, yyyf);
      console.log("linea " + l);
}

dibujarLinea(bordes, 1, 1, 1, 299);
dibujarLinea(bordes, 1, 299, 299, 299);
dibujarLinea(bordes, 1, 1, 299, 1);
dibujarLinea(bordes, 299, 1, 299, 299);

console.log("x_final no cambia, tampoco cambia y_final, solo cambia x_inicial y y_final que vendrian siendo las variables");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)

{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
