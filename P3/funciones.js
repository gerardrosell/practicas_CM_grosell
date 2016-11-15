var tot=0;
var nid=1;
function borrar(nid, precio){
	//alert("La id de dalt és: id"+nid);
	var borrar=document.getElementById("id"+nid);
	var borrar_btn=document.getElementById("btn"+nid);
	borrar.parentNode.removeChild(borrar);
	borrar_btn.parentNode.removeChild(borrar_btn);
	tot=tot-parseFloat(precio);
	document.getElementById("suma").innerHTML="Total: "+tot.toFixed(2)+"€";

}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function comprar(descrip, precio){
	var espacio=document.getElementById("total");
	var parrafo=document.createElement("p");
	//crea l'id nou
	parrafo.setAttribute("id","id"+nid);
	anclaN=document.createElement("a");
	anclaN.setAttribute("title","X");
	anclaN.setAttribute("href","#");
	anclaN.setAttribute("onClick","borrar("+"id"+nid+","+precio+")");
	
	var ids=document.getElementById("id"+nid);

	var contenido=document.createTextNode(descrip+" "+precio+"€");
	parrafo.appendChild(contenido);
	espacio.appendChild(parrafo);
	var boton=document.createElement("input");
	boton.setAttribute("type","button");
	boton.setAttribute("id","btn"+nid);
	boton.setAttribute("value","Eliminar")
	boton.setAttribute("onClick","borrar("+nid+","+precio+");");
	espacio.appendChild(boton);
	tot+=parseFloat(precio);
	document.getElementById("suma").innerHTML="Total: "+tot.toFixed(2)+"€";
	nid++;

}