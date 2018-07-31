$(function(){
	$('button').bind('click',function(){
		// $('.div').load("page_1.html");// metodo auxiliar
		// $.get("page_1.html",function(data){ //metodo get
		// 	$('.div').html(data);
		// })
		$.post("page_1.html",function(data){ //metodo post
			$('.div').html(data);
		})

	});
});