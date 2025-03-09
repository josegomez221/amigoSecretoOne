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
    }
    
}