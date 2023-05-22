var imgAtual = "airmax vitrine.png";
var imgAnterior = "vans vitrine.png"
function imagemprox() {
document.getElementById("airmaxad").src = imgAtual;
let aux = imgAtual;
imgAtual = imgAnterior;
imgAnterior = aux;
}
function imagemant() {
document.getElementById("airmaxad").src = imgAtual;
let aux = imgAtual;
imgAtual = imgAnterior;
imgAnterior = aux;
}