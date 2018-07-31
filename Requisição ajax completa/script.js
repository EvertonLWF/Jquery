$(function(){
	$('#form').bind('submit',function(e){
		e.preventDefault();
		var txt = $(this).serialize();
		console.log(txt);
		$.ajax({
			type:'POST',
			url: 'ajax.php',
			data:txt,
			success:function(html){
				$('.div').html(html);
			},
			error:function(){
				alert("Ocorreu um erro!!!");
			}
		});
	})
});