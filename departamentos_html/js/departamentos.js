window.onload = cambiarImgDepa;

function cambiarImgDepa(){
	let departamento = document.getElementById("nombreDepa").value; 
	let header = document.getElementById("head");
	let srcImg = "../img/";
	switch(departamento){
		case "san_miguel":{
			srcImg += "san_miguel.jpg";
			break;
		}
		case "la_union":{
			srcImg += "la_union.jpg";
			break;
		}
		case "usulutan":{
			srcImg += "usulutan.jpg";
			break;
		}
		case "san_salvador":{
			srcImg += "san_salvador.jpg";
			break;
		}
		case "santa_ana":{
			srcImg += "santa_ana.jpg";
			break;
		}
		case "ahuachapan":{
			srcImg += "ahuachapan.jpg";
			break;
		}
		case "sonsonate":{
			srcImg += "sonsonate.jpg";
			break;
		}
		case "la_libertad":{
			srcImg += "la_libertad.jpg";
			break;
		}
		case "cabañas":{ 
			srcImg += "cabañas.jpg";
			break;
		}
		case "la_paz":{
			srcImg += "la_paz.jpg";
			break;
		}
		case "chalatenango":{
			srcImg += "chalatenango.jpg";
			break;
		}
		case "cuscatlan":{
			srcImg += "cuscatlan.jpg";
			break;
		}
		case "san_vicente":{
			srcImg += "san_vicente.jpg";
			break;
		}
		case "morazan":{
			srcImg += "morazan.jpg";
			break;
		}
	}
	header.style.background = "-webkit-linear-gradient(to right, hsla(240, 100%, 50%, 0.371), hsla(240, 100%, 50%, 0.371)), url("+srcImg+")";
	header.style.background = "linear-gradient(to right, hsla(240, 100%, 50%, 0.371), hsla(240, 100%, 50%, 0.371)), url("+srcImg+")";
	header.style.backgroundSize = "cover";
	header.style.backgroundAattachment = "fixed";
	header.style.position = "relative";
}