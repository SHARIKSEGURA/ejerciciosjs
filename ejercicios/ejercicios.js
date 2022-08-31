function opBasicas(){
var a;
var b;
var suma;
var division;
var resta;
var multiplcacion;
a = parseInt(prompt("Por favor ingresar el primer valor"));
b = parseInt(prompt("Por favor ingresar el segundo valor"));
suma = a + b ;
resta = a - b ;
multiplcacion = a * b;
division = a/ b;

alert("El resultado es la suma es " + suma);
alert("El resultado es la resta es " + resta);
alert("El resultado es la multiplicacion es " + multiplcacion);
alert("El resultado es la division es " + division);
}


function  nMayor(){
    var a;
    var b;
    a = parseInt(prompt("Por favor ingresar el valor a comparar"));
    b = parseInt(prompt("Por favor ingresar el valor a cpmparar")); 

    if (a == b) {
        alert("Los valores ingresados son iguales")
    }else if (a > b ) {
        alert("El numero mayor es "+ a)
    } else{
        alert("el numero mayor es "+ b)
    }
}

function nMenor(){
    var a;
    var b;
    var c;

    a = parseInt(prompt("Por favor ingresar el valor a comparar"));
    b = parseInt(prompt("Por favor ingresar el valor a cpmparar"));
    c = parseInt(prompt("Por favor ingresar el valor a cpmparar"));
    if (a <= b && a <= c) {
        alert("El nimero menor es: "+ a)
    } else if (b <= a && b <= c) {
        alert("El numero menor es: "+ b)
    }else{
        alert("El numero menor es: "+ c)
    }
}
function parImpar(){
    var a = 0;
    a = parseInt(prompt("Por favor ingresar el valor"));
    if (a / 2 == 0) {
        alert(a +" Es numero par ")
    }else{
        alert(a +" Es numero impar ")
    }

}
function nuCua(){
    var a = 0;
    a = parseInt(prompt("Porfavor ungresar el valor:"));
    a = a * a;

    alert("El numero al cuadrado es: "+ a);
}
function arTrian(){
    var b;
    var h;
    var a;
    h = parseInt(prompt("Ingrese el valor de la altura del triangulo"));
    b = parseInt(prompt("Ingrese el valor de la base del triangulo"));
    a= (b * h) / 2;
    alert("El area del triangulo es: "+ a);
}
function cmm(){
    var cm = 0;
    var metros = 0;
    metros = parseInt(prompt("Ingrese el valor del numero en metros"));
    cm = (metros * 100);
    alert("El resultado en cm es: "+ cm);

}
function edad(){
    var edad;
    var año = 2022;
    var total;
     edad = parseInt(prompt("Ingrese su edad"))
     total = año - edad;
     alert("Nacio en el año: " + total);
}
function bancoN (){
    var n = 0;
    var t=0;
    var c= 0;
    var g = 0;
    var i = 0;
    n = parseInt (prompt("ingrese la cantidad de años"));
    c = parseInt(prompt("ingrese el capital invertido"));
    i = 2/100;
    g = (i*12) * n;
    t = g*c;
    alert("La ganancia del banco es: " + g);
    alert("La ganancia total es: "+ t);
}
function promedio(){
var cl1 = 0;
var cl2 = 0;
var cl3 = 0;
var cl4 = 0;
var cl5 = 0;
var total= 0;
cl1 = parseInt(prompt("ingrese la primera calificación"));
cl2 = parseInt(prompt("ingrese la segunda calificación"));
cl3 = parseInt(prompt("ingrese la tercera calificación"));
cl4 = parseInt(prompt("ingrese la cuarta calificación"));
cl5 = parseInt(prompt("ingrese la quinta calificación"));
total = (cl1 + cl2 + cl3 + cl4 + cl5)/5;
alert ("El promedio del estudiante es: " +total);
if(total>=3)
        alert('El estudiante es aprobado');
    else
        alert('El estudiante es reprobado');

}
function frutas (){
    var kil = 4500;
    var nkil = 0;
    var total = 0;
    var dess1 = 0;
    var dess2 = 0;
    var dess3 = 0;
    nkil = parseInt(prompt("ingrese el numero de kilos"));
    total = kil * nkil;
    dess1 = (10 * total) / 100;
    dess2 = (15 * total) / 100;
    dess3 = (20 * total) / 100;
    if (nkil<=2)
    alert('Su descuento es de 0% el valor  pagar es: ' + total);
    else if (nkil<=5)
     alert('Su descuento es de 10% el valor  pagar es: ' + dess1);
    else if (nkil<=9 )
      alert('Su descuento es de 15% el valor a pagar es: '+ dess2);
    else if (nkil >= 10)
      alert ('Su descuento es de 20% el valor a pagar es: ' + dess3);
}