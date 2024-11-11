var quastion1 = prompt("Биринши санды енгизиниз: ");
var quastion2 = prompt("Екинши санды енгизиниз: ");
var quastion3 = prompt("Ушинши санды енгизиниз: ");
if (quastion1 < quastion2 < quastion3 ){
    alert(quastion3 - quastion1)
} else if (quastion2 < quastion3 < quastion1 ){
    alert(quastion1 - quastion2)
}if(quastion3 < quastion1 < quastion2 ){
    alert(quastion2 - quastion3)
}