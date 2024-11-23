function Agregarnuevatarea(){

    //obtener el valor del campo
    let nuevatareatexto = document.getElementById("nuevatarea").value;

    //Validamr que el valor no este vacio
    if(nuevatareatexto === ""){
        alert("Por favor, ingresar una tarea");
        return;
    }
    //Crear elemento en la lista
    let nuevatarea = document.createElement("li");
    nuevatarea.textContent = nuevatareatexto + " ";

    //Crear boton eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {nuevatarea.remove();}

    //Agregar boton eliminar al elemento de la lista
    nuevatarea.appendChild(botonEliminar);

    //Agregar la tarea a la lista
    document.getElementById("listatareas").appendChild(nuevatarea);

    //limpiar de forma automatica la tarea
    document.getElementById("nuevatarea").value = "";



}