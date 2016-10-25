$( document).ready(function(){

	var contador=60;
	var canvas=document.getElementById("mycanvas");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);

	function digit(pos,num){
		/*var canvas=document.getElementById("mycanvas");
		var ctx=canvas.getContext("2d");*/
		//genera dígit
		
		
		if(num==0){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);

		} else if(num==1){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);

		} else if(num==2){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==3){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==4){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==5){
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==6){
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==7){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);

		} else if(num==8){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else {
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		}
		ctx.stroke();
	}

	function cleardigit(pos){

			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);
		}


	function render(){
		var canvas=document.getElementById("mycanvas");
		var ctx=canvas.getContext("2d");
		
		var pos1=150;
		var pos2=pos1+50;
		var pos3=pos2+55;
		var pos4=pos3+50;
		var pospunts=pos3+5;
		
		var min=parseInt(contador/60);//nomes l'enter
		//min=min.toFixed(0);
		var dm=parseInt(min/10);
		//dm=dm.toFixed(0);
		var um=min%10;
		var seg=contador%60;
		var ds=parseInt(seg/10);
		//ds=ds.toFixed(0);
		var us=seg%10;

		ctx.fillStyle="#FFFFFF";
		cleardigit(pos1);
		cleardigit(pos2);
		cleardigit(pos3);
		cleardigit(pos4);

		//punts
		//ctx.fillStyle="#567890";
		ctx.fillStyle="#000000";
		ctx.fillRect(pospunts, 45, 5, 5);
		ctx.fillRect(pospunts, 65, 5, 5);
		ctx.stroke();

		digit(pos1,dm);
		digit(pos2,um);
		digit(pos3,ds);
		digit(pos4,us);


		if(contador==0){
			contador=60;
		}
		contador=contador-1;

		/*ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="#336699";
		ctx.fillRect(10+pos,10+pos,100,100);
		pos=(pos+5) %100;
		console.log(pos)*/
	};

	setInterval(render,1000);
	
});

