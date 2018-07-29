$(function(){
	$('#save').after("<div>Salvar senha?</div>");
	$('#nome').before("<div>nome:</div>");

});



function desativar(){
	$('#nome').attr("disabled","disabled");
	$('button').attr("onclick","ativar()").html("ativar");
	
}
function ativar(){
	$('#nome').removeAttr("disabled");
	$('button').attr("onclick","desativar()").html("Desativar");
	
}