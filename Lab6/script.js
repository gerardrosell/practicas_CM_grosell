$( document).ready(function(){

	function digit(pos,num){
		var canvas=document.getElementById("mycanvas");
		var ctx=canvas.getContext("2d");
		//genera dígit
		if(num==0){
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

		} else if(num==1){
			//1
			ctx.rect(pos+50, 25, 5, 30);
			//2
			ctx.rect(pos+50, 60, 5, 30);

		} else if(num==2){
			//1
			ctx.rect(pos+50, 25, 5, 30);
			//3
			ctx.rect(pos+20, 90, 30, 5);
			//4
			ctx.rect(pos+15, 60, 5, 30);
			//6
			ctx.rect(pos+20, 20, 30, 5);
			//7
			ctx.rect(pos+20, 55, 30, 5);

		} else if(num==3){
			//1
			ctx.rect(pos+50, 25, 5, 30);
			//2
			ctx.rect(pos+50, 60, 5, 30);
			//3
			ctx.rect(pos+20, 90, 30, 5);
			//6
			ctx.rect(pos+20, 20, 30, 5);
			//7
			ctx.rect(pos+20, 55, 30, 5);

		} else if(num==4){
			//1
			ctx.rect(pos+50, 25, 5, 30);
			//2
			ctx.rect(pos+50, 60, 5, 30);
			//5
			ctx.rect(pos+15, 25, 5, 30);
			//7
			ctx.rect(pos+20, 55, 30, 5);

		} else if(num==5){
			//2
			ctx.rect(pos+50, 60, 5, 30);
			//3
			ctx.rect(pos+20, 90, 30, 5);
			//5
			ctx.rect(pos+15, 25, 5, 30);
			//6
			ctx.rect(pos+20, 20, 30, 5);
			//7
			ctx.rect(pos+20, 55, 30, 5);

		} else if(num==6){
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

		} else if(num==7){
			//1
			ctx.rect(pos+50, 25, 5, 30);
			//2
			ctx.rect(pos+50, 60, 5, 30);
			//6
			ctx.rect(pos+20, 20, 30, 5);

		} else if(num==8){
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

		} else {
			//1
			ctx.rect(pos+50, 25, 5, 30);
			//2
			ctx.rect(pos+50, 60, 5, 30);
			//3
			ctx.rect(pos+20, 90, 30, 5);
			//5
			ctx.rect(pos+15, 25, 5, 30);
			//6
			ctx.rect(pos+20, 20, 30, 5);
			//7
			ctx.rect(pos+20, 55, 30, 5);

		}
		ctx.stroke();
	}


	function render(){
		var canvas=document.getElementById("mycanvas");
		var ctx=canvas.getContext("2d");
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var pos1=0;
		var pos2=pos1+50;
		var pos3=pos2+55;
		var pos4=pos3+50;
		var pospunts=pos3+5;

		

		//punts
		ctx.rect(pospunts, 45, 5, 5);
		ctx.rect(pospunts, 65, 5, 5);
		ctx.stroke();

		digit(pos1,1);
		digit(pos2,2);
		digit(pos3,3);
		digit(pos4,4);


		/*ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="#336699";
		ctx.fillRect(10+pos,10+pos,100,100);
		pos=(pos+5) %100;
		console.log(pos)*/
	};

	setInterval(render,1000);
	
});

