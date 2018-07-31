$(function(){
	$('#btn1').bind('click',function(){
		// $('.div').animate({
		// 	'border-radius':75,
		// 	'top':80,
		// 	'left':400,
		// 	'height':50,
		// 	'width':50
		// }, {
		// 	duration:1500,
		// 	step:function(){
		// 		console.log("Nova etapa...");
		// 	},
		// 	complete:function(){
		// 		$('.div').animate({
		// 			'border-radius':0,
		// 			'top':4,
		// 			'left':8,
		// 			'height':150,
		// 			'width':150
		// 		}, 1500);
		// 	},
		// 	start:function(){
		// 		console.log("Animação start !!");

		// 	}
		// });
		$('.div').animate({
			'margin-left':500
		}, 2000);
	});
	$('#btn2').bind('click',function(){
		$('.div').stop();
	});
	$('#btn3').bind('click',function(){
		$('.div').animate({
			'margin-left':"-=50"
		});
	});
	$('#btn4').bind('click',function(){
		$('.div').animate({
			'margin-left':"+=50"
		});
	});
});