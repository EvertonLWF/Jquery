$(function(){

	$('#form').bind('submit', function(e){
		e.preventDefault();

		var txt = $(this).serialize();
		console.log(txt);

		$.ajax({
			type:'POST',
			url:'ajax.php',
			data:txt,
			dataType:'json',
			success:function(j){
				// console.log(j);
				// alert("Meu nome eh: "+j.nome);
				// alert("Meu nome eh: "+j.nome+" e tem "+j.qt_nome+" caracteres");
				console.log(j.status);
			}

		});
	});
});