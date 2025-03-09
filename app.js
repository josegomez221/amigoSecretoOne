let amigos = [];

function agregarAmigo() {
    //recibe valor de unput con id 'amigo'
    let amigo = document.getElementById('amigo').value;
    //valida si el input tiene información
    if (amigo === "") {
        alert("Debes ingresar el nombre del amigo");
    }else{
        //ingresa input a lista 'listaAmigos'
        amigos.push(amigo);

        //limpia input
        document.getElementById('amigo').value = '';

        mostrarAmigos();
    }
    
}

function mostrarAmigos() {
   
    limpiarLista()
    // Iterar sobre el arreglo 'amigos'
    for (let nombre = 0; nombre < amigos.length; nombre++) {
      // Crear un nuevo elemento <li> para cada amigo
      let li = document.createElement('li');
      li.textContent = amigos[nombre]; // Asignar el nombre del amigo como texto del <li>
  
      // Agregar el <li> a la lista
      lista.appendChild(li);
    }
  }

  function sortearAmigo() {
     //Limpia lista
    limpiarLista()

    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
    } else {
        //generar indice aleatorio de amigos
        let amigoAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = amigos[amigoAleatorio];
       
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSecreto}`;

    }
  }

  function limpiarLista() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    let lista = document.getElementById('listaAmigos');
  
    // Limpiar la lista existente
    lista.innerHTML = '';
  }