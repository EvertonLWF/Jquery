$(function(){
	// $('.botao').bind('mousedown',function(){
	// 	console.log('Pressionou o botão');
	// });
	// $('.botao').bind('mouseup',function(){
	// 	console.log('soltou o mouse');
	// });
	// $('.botao').bind('mousemove',function(){
	// 	console.log('moveu o mouse');
	// });
	// $('.botao').bind('mouseover',function(){
	// 	console.log('mouse esta em cima');
	// 	$(this).addClass('botaoEmCima');
	// });
	// $('.botao').bind('mouseout',function(){
	// 	console.log('mouse saiu de cima');
	// 	$(this).removeClass('botaoEmCima');
	// });
	$('.botao').bind('click',function(){
		console.log('clicou');
	});
	$('.botao').bind('dblclick',function(){
		console.log('clicou 2x');
	});

});