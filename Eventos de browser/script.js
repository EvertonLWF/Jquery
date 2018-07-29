function evento(){
	console.log("scrolloow");
	$(this).css('background-color','yellow');
};
function r(){
	console.log("Resize OK");
}


$(function(){
	$(window).bind('resize',r);
	$('#div').bind('scroll',evento);
});