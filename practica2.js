/**
 * Created by Mikel on 18/09/2018.
 */
//1
    function f1() {


var cadena=prompt('Introduce texto');
var respuesta=check(cadena);

alert(respuesta);

function check(cadena) {
    if(cadena==cadena.toUpperCase() || cadena==cadena.toLowerCase()){
        if(cadena==cadena.toUpperCase()){
            respuesta="La cadena esta formada por mayúsculas";
        }else{
            respuesta="La cadena esta formada por minúsculas"
        }
    }else{
        respuesta="La cadena esta formada por una mezcla"
    }
    return respuesta;
}
}
//2
function f2() {


var cadena=prompt('Introduce texto');
mitades(cadena);

function mitades(cadena) {
    alert (cadena.substring(0,Math.round(cadena.length/2)));
    alert (cadena.substring(Math.round(cadena.length/2),cadena.length));
}

}
//3
function f3() {

var cadena=prompt('Introduce texto');
palindromo(cadena);
function palindromo(cadena) {
    cadena=cadena.split(' ').join('').trim().toLowerCase().split('');
    if(cadena.toString()==cadena.reverse().toString()){
        alert("La cadena '"+cadena+"' es un palíndromo");
    }else{
        alert("La cadena '"+cadena+"' no es un palíndromo");
    }
}
//4
var sueldo=parseFloat(prompt('sueldo actual?'));
var anios=parseFloat(prompt('años en empresa?'));
var porcentaje=0;

alert(total(sueldo,anios));

function total(sueldo,anios) {
    if(sueldo<500){
        porcentaje+=10;
    }if(anios>=10){
        porcentaje+=10;
    }
    return sueldo+(sueldo*porcentaje/100);
}
}
//5
function f5() {
    var numero=Math.round(Math.random()*1000);
    do {
        var n = parseInt(prompt('Introduce un número del 1 al 1000'));
        if (n > 0 && n <= 1000) {
            if(numero>n){
                alert("prueba con un número más grande")
            }else if (numero<n){
                alert("prueba con un número más pequeño")
            }else{
                alert("Enhorabuena11")
            }
        } else {
            alert('Eese número no vale');
            alert(n);
        }
    }while(numero!=n && !isNaN(n));
}
//6
function f6() {
    const numero = nRandom();
    do{}while (logica(numero.split(""))==0);
    alert("enhorabuena!");
    function nRandom() {
        var numero= (Math.floor(Math.random() * 10)).toString();
        do{
            let n= (Math.floor(Math.random() * 10)).toString();
            if(numero.indexOf(n)==-1){
                numero+=n;
            }
        }while(numero.length<4)
        return numero;
    }
    function pedirNumero() {
        let n=prompt('Introduce un número del 0000 al 9999 (SIN REPETIR NINGUNO)');
        if (n.length!=4){
            alert ("Número no valido");
            return pedirNumero();
        }else{
            if(n.indexOf(n.charAt(3))!=3 ||n.indexOf(n.charAt(2))!=2 || n.indexOf(n.charAt(1))!=1){
                alert ("No repitas ningun numero...");
                return pedirNumero();
            }else{
                return n;
            }
        }
    }
    function logica(numero) {
        var n = pedirNumero().split("");

        var muertos = 0;
        var heridos = 0;
        var y=n.length;
        for (x=0;x<y;x++) {

            if (numero[x] == n[x]) {
                numero.splice(x, 1);
                n.splice(x, 1);
                muertos++;
                x--;
                y--;
            }
        }
        alert("muertos : "+muertos);
        for (i in n) {
            for (x in numero) {
                if (numero[x] == n[i]) {
                    heridos++;
                }
            }
        }
        alert("Heridos : "+heridos);
        if(muertos==4){
            return 1;
        }else{
            return 0;
        }
    }
}


//6b
function f6b() {
    pantalla();
    const numero = nRandom();
    var input = document.getElementById("numero");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            logica(numero.split(""),input);
        }
    });
    function nRandom() {
        var numero= (Math.floor(Math.random() * 10)).toString();
        do{
            let n= (Math.floor(Math.random() * 10)).toString();
            if(numero.indexOf(n)==-1){
                numero+=n;
            }
        }while(numero.length<4)
        return numero;
    }
    function checkNumero(input) {
        let n=input.value;
        input.value="";
        if (n.length!=4){
            alert ("El número tiene que tener 4 cifras.");
        }else if(n.match(/[^0-9]/i)){
            alert ("Introduce un número");
        }else{
            if(n.indexOf(n.charAt(3))!=3 ||n.indexOf(n.charAt(2))!=2 || n.indexOf(n.charAt(1))!=1){
                alert ("No repitas ningún número...");
            }else{
                return n
            }
        }
    }
    function logica(numero,input) {
        var nOriginal = checkNumero(input);
        var n = nOriginal.split("");
        var muertos = 0;
        var heridos = 0;
        var y=n.length;
        for (x=0;x<y;x++) {
            if (numero[x] == n[x]) {
                numero.splice(x, 1);
                n.splice(x, 1);
                muertos++;
                x--;
                y--;
            }
        }
        if(muertos==4){
            alert("¡enhorabuena!");
            alert("¡Gracias por jugar!")
            location.reload();

        }else{
            alert("muertos : "+muertos);
            for (i in n) {
                for (x in numero) {
                    if (numero[x] == n[i]) {
                        heridos++;
                    }
                }
            }
            alert("Heridos : "+heridos);
            fila(nOriginal,muertos,heridos);
        }
    }
    function pantalla() {
        document.getElementById("jugar").style.display = 'none';
        let ocultos=document.getElementsByClassName("oculto");
        for(i in ocultos){
            ocultos[i].hidden = false;
        }
    }
    function fila(n,muertos,heridos) {
        var tr = document.createElement("tr")
        var celda = document.createElement("td");
        var texto= document.createTextNode(n);
        celda.appendChild(texto);
        tr.appendChild(celda);
        celda = document.createElement("td");
        texto= document.createTextNode(muertos);
        celda.appendChild(texto);
        tr.appendChild(celda);
        celda = document.createElement("td");
        texto= document.createTextNode(heridos);
        celda.appendChild(texto);
        tr.appendChild(celda);
        document.getElementsByTagName("tbody")[0].appendChild(tr);
    }
}


//7
function f7() {
    var n=pedirNumero();
    if (n!=0){
        do{
            var y=pedirNumero()
            n+=y;
            if(y!=0){
                alert(n);
            }
        }while(y!=0);
    }
    function pedirNumero() {
        let n=prompt('Introduce un número (0 para salir)');
        if (n.match(/[^0-9]/i)){
            alert("Número no valido")
            pedirNumero();
        }else{
            return parseFloat(n);
        }
    }
}

//9
function f9() {
     var arrayNumeros=new Array();
     do {
         var n=pedirNumero();
         if(n!=null)
             arrayNumeros.push(n);
     }while(n!=null);

    function pedirNumero() {
        let n=prompt('Introduce un número');
        alert(n);
        if (n == null){
            return n;
        }else if (n.match(/[^0-9]/i)){
        alert("Número no valido")
        pedirNumero();
        }
        else{
            return parseFloat(n);
        }
    }
}

