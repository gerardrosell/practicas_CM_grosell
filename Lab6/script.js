$( document).ready(function(){


	function render(){
		var canvas=document.getElementById("mycanvas");
		var ctx=canvas.getContext("2d");
		var pos=0;
		var pos2=pos+50;
		var pos3=pos2+55;
		var pos4=pos3+50;
		var pospunts=pos3+5;

		//punts
		ctx.rect(pospunts, 45, 5, 5);
		ctx.rect(pospunts, 65, 5, 5);

		//digit 1
		//1
		ctx.rect(pos+50, 25, 5, 30);
		//2
		ctx.rect(pos+50, 60, 5, 30);
		//3
		ctx.rect(pos+20, 90, 30, 5);
		//4
		ctx.rect(pos+15, 60, 5, 30);
		//5
		ctx.rect(pos+15, 25, 5, 30);
		//6
		ctx.rect(pos+20, 20, 30, 5);
		//7
		ctx.rect(pos+20, 55, 30, 5);

		//digit 2
		//1
		ctx.rect(pos2+50, 25, 5, 30);
		//2
		ctx.rect(pos2+50, 60, 5, 30);
		//3
		ctx.rect(pos2+20, 90, 30, 5);
		//4
		ctx.rect(pos2+15, 60, 5, 30);
		//5
		ctx.rect(pos2+15, 25, 5, 30);
		//6
		ctx.rect(pos2+20, 20, 30, 5);
		//7
		ctx.rect(pos2+20, 55, 30, 5);

		//digit 3
		//1
		ctx.rect(pos3+50, 25, 5, 30);
		//2
		ctx.rect(pos3+50, 60, 5, 30);
		//3
		ctx.rect(pos3+20, 90, 30, 5);
		//4
		ctx.rect(pos3+15, 60, 5, 30);
		//5
		ctx.rect(pos3+15, 25, 5, 30);
		//6
		ctx.rect(pos3+20, 20, 30, 5);
		//7
		ctx.rect(pos3+20, 55, 30, 5);

		//digit 4
		//1
		ctx.rect(pos4+50, 25, 5, 30);
		//2
		ctx.rect(pos4+50, 60, 5, 30);
		//3
		ctx.rect(pos4+20, 90, 30, 5);
		//4
		ctx.rect(pos4+15, 60, 5, 30);
		//5
		ctx.rect(pos4+15, 25, 5, 30);
		//6
		ctx.rect(pos4+20, 20, 30, 5);
		//7
		ctx.rect(pos4+20, 55, 30, 5);

		ctx.stroke();
		





		/*ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="#336699";
		ctx.fillRect(10+pos,10+pos,100,100);
		pos=(pos+5) %100;
		console.log(pos)*/
	};

	setInterval(render,1000);
	
});

