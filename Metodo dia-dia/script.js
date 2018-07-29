$(function(){
	var valor = $.trim($("#algo").html());
	document.getElementById("algo").innerHTML = valor;

	$('li').each(function(){
	alert($(this).html());

	});
});
