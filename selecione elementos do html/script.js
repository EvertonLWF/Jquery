$('button'); //seleção de todos 

$('#btn1');//seleção por id

$('.botao');//seleção por class

$('li.botao');// seleção tag+class

$('.lista2 li.botao');//seleção uma lista com uma class


if($('.botao').length > 0){
	alert("Tem botao na pagina");
}