$(function(){
	// $('button').click(function(){
	// 	$(this).toggleClass("fundoRed");
	// });
	// $('button').mouseover(function(){
	// 	$(this).addClass("fundoBlue");
	// })
	// $('button').mouseout(function(){
	// 	$(this).removeClass("fundoBlue");
	// })
	// $('button').hover(function(){
	// 	$(this).addClass("fundoBlue");
	// }, function(){
	// 	$(this).removeClass("fundoBlue");
	// });
	// $('button').bind('click', function(){
	// 	$(this).toggleClass("fundoGreen");
	// });

	// $('button').unbind('click');//remover evento
	// $('button').off('click');
	// $('button').trigger("click");//falso evento
	$('#btn1').bind("click",function(){
		$('#btn2').trigger("click");
	});

	$('#btn2').bind("click",function(){
		alert("clicou no botão 2");
	});

});
