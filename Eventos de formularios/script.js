$(function(){
	$('#form').bind("submit", submit);
	$('#nome').bind('select', select);
	$('#nome, #email').bind('focus', focus);
	$('#nome, #email').bind('blur', blur);
	$('#select').bind('change',change);
});

function submit(e){
	e.preventDefault();
	console.log("Ocorreu um submit");
}
function select(){
	console.log("Houve uma seleção");
}
function focus(){
	$(this).addClass('focado');
}
function blur(){
	$(this).removeClass('focado');
}
function change(){
	console.log($(this).val());
}