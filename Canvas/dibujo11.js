var d = document.getElementById("Dibujito_11");
var lienzo = d.getContext("2d");
console.log(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200,200);
lienzo.moveTo(250, 50);
lienzo.lineTo(250, 300);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(300, 300);
lienzo.lineTo(2,300);
lienzo.stroke();
lienzo.closePath();


dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("brown", 20, 200, 120, 20);
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
