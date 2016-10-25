$( document).ready(function(){

	var canvas=document.getElementById("mycanvas");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
	var img = document.getElementById("imatge")
    var pat = ctx.createPattern(img, "repeat");
    ctx.rect(0, 0, canvas.width,canvas.height);
    ctx.fillStyle = pat;
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.fillRect(299,0,2,400);
	
	function render(){
				
	};

	//setInterval(render,1000);
	
});

