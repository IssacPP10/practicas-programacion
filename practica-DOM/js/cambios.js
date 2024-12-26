//Hecho por Ricardo Issac Puentes Palacios//
let btn_color = document.getElementById('btncolor');
let btn_fondo = document.getElementById('btnfondo');
let fondo = document.querySelector('.fondo');
let color = document.querySelector('.color');


//Esta funcion es para cambiar el color del texto de nuestro primer div dentro del row
//la variable color que uso en el codigo es para especificar que me estoy refiriendo a la clase que contiene mi primer div para especificar que solo ese div con esa clase va cambiar con lo que se especifica 
function changeColor() {
	if (btn_color == "color") {}
		color.style.color = "#D905FF"
	    console.log(btn_color)
}
//Esta funcion es para cambiar el color de fondo de nuestro div de en medio dentro del row
//la variable fondo que uso en el codigo es para especificar que me estoy refiriendo a la clase que contiene mi segundo div para especificar que solo ese div con esa clase va cambiar con lo que se especifica 
function changeFondo() {
	if (btn_fondo == "fondo") {}
		fondo.style.background = "#1B8490"
		fondo.style.color = "#ffffff"
	    console.log(btn_fondo)
}
//Esta funcion es para cambiar el texto de nuestra etiqueta p del ultimo div dentro del row
function changeText () {
	document.getElementById("btntexto").innerHTML = "Hola Mundo, Soy Programador XDXDXD";
}