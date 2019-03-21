$(function(){
console.log("JS Ativado!");

var circle = document.getElementById("circle");
var cross = document.getElementById("cross");

var tabela = document.getElementById("#tabela");
var casa1 = document.getElementById("#casa1");

var casa2 = document.getElementById("#casa2");
var casa3 = document.getElementById("#casa3");
var casa4 = document.getElementById("#casa4");
var casa5 = document.getElementById("#casa5");
var casa6 = document.getElementById("#casa6");
var casa7 = document.getElementById("#casa7");
var casa8 = document.getElementById("#casa8");
var casa9 = document.getElementById("#casa9");
function jogoXadrez(){
	var cont = 0;
	if(cont % 2 == 0){
		circle.style.backgroundImage="url(../images/cross.svg)";
		circle.style.backgroundSize="70%";
		cont++;

	}
	else{
		cross.style.backgroundImage="url(../images/cross.svg)";
		cont++;
	}
}
});