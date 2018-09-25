$(function(){
	$('button').bind('click', function(){
		var alt = $('#altura').val();
		var pes = $('#peso').val();
		alt = alt.replace(',','.');
		pes = pes.replace(',','.');
		//imc = peso/altura²
		var imc = pes/(alt*alt);

		if(imc<16){
			var trad = 'Baixo peso muito grave';
		}else if(imc >=16 && imc <16.99){
			var trad = 'Baixo peso grave';
		}else if(imc >= 17 && imc < 18.49){
			var trad = 'Baixo peso';
		}else if(imc >= 8.49 && imc < 24.99){
			var trad = 'Peso normal';
		}else if(imc >= 25 && imc < 29.99){
			var trad = 'Sobrepeso';
		}else if(imc >= 30 && imc < 34.99){
			var trad = 'Obesidade Grau I';
		}else if(imc >= 35 && imc < 39.99){
			var trad = 'Obesidade Grau II';
		}else if(imc >= 40){
			var trad = 'Obesidade Grau III';
		}
		$('#resultado').html("Seu IMC = "+imc+" Kg/m² e seu status é:"+trad);
	});
});