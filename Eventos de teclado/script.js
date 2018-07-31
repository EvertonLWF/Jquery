$(function(){
	$('#nome').bind('keydown',keydown);
});

function keydown(e){
	if(e.keyCode==13){
		var txt = $(this).val();
		console.log(txt);
		$(this).val('');
	}
};
// function keyup(){
// 	console.log('Uma tecla foi despressionada');
// };