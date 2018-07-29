function alterar(){
	var indice = document.getElementById("selecionar").value;
	var nome = document.getElementById("nome").value;
	$(function(){
		$('li').eq(indice-1).html(nome).css("color","red");
	});
	
}