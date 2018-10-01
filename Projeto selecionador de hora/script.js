$(function(){
	var hrcmp;
	$('input').bind('focus',function(){
		var pos = $(this).offset();
		var width = $(this).width();

		$('.hr').css('left',pos.left + width +20);
		$('.hr').css('top',pos.top -15);
		$('.hr').show();
		hrcmp = $(this);
	});
	$('input').bind('blur',function(){
		setTimeout(function(){
			$('.hr').hide();
		},200);
		
	});

	$('.hr button').bind('click',function(){
		var hora = $(this).html();
		hrcmp.val(hora);
	});
});