//---- PROYECTO CREADO POR BRANDON GOMEZ ----
//---- brandonwilliammg@gmail.com -----
//Creacion de un array para guardar los datos
const personas=[];
//Metodo que guarda localmente los datos digitados
function guardar(){
    //Asignacion de los datos al index del array
   personas[0]=document.getElementById("firstName").value;
   personas[1]=document.getElementById("secondName").value;
   personas[2]=document.getElementById("lastName1").value;
   personas[3]=document.getElementById("lastName2").value;
   personas[4]=document.getElementById("age").value;
   personas[5]=document.getElementById("email").value;
   personas[6]=document.getElementById("phone").value;
   personas[7]=document.getElementById("position").value;

   //Se guardan ocalmente los datos asignados al array
   localStorage.setItem('personas',JSON.stringify(personas));
}

