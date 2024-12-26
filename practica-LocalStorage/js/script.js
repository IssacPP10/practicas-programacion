//Hecho por Ricardo Issac Puentes Palacios//

const form = document.getElementById('Formulario');

form.addEventListener("submit", function(event) {
	event.preventDefault();
	let TransactionFormData = new FormData(form);
	let TransformObj = obtenerDatos(TransactionFormData);
	GuardarLocalStorage(TransformObj);
	console.log(TransformObj);
});

function obtenerDatos(TransactionFormData){
	let id = TransactionFormData.get("id"); 
	let producto = TransactionFormData.get("producto");
	let descripcion =TransactionFormData.get("descripcion");
	let marca =TransactionFormData.get("marca");
	let precio = TransactionFormData.get("precio");
	let cantidad = TransactionFormData.get("cantidad");

	return{
		"id": id,
		"producto": producto,
		"descripcion": descripcion,
		"marca": marca,
		"precio": precio,
		"cantidad": cantidad
	}
}

function GuardarLocalStorage (TransformObj) {
	let MyArray = JSON.parse(localStorage.getItem("Datos")) || [];
	MyArray.push(TransformObj);
	//Convierto el array a JSON
	let ArrayJSON = JSON.stringify(MyArray);
	localStorage.setItem("Datos", ArrayJSON)
}

