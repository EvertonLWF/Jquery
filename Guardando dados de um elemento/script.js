$(function(){
	$("input").before("<div>Nome:</div>");
	$("input").data("caracteres");
	$("input").data("caracteres",$("input").val().length);
});