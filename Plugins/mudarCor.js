(function($){

	$.fn.mudarCor = function(cor){
		this.each(function(){
			$(this).css('color',cor);
			$(this).css('text-decoration','none');
			$(this).hover(function(){
				$(this).css('background-color','#000');
			},function(){
				$(this).css('background-color','#FFF');
			});

		});
		return this;
	}

}(jQuery));