function evento(e){
	e.preventDefault();
	console.log(this);
}


$(function(){
	$('#botao').bind('click', evento);
	$('#botao').bind('mouseover', evento);


});