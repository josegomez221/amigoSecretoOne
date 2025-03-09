let amigos = [];
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === "") {
        alert("Debes ingresar el nombre del amigo");
    }else{
        amigos.push(amigo);
    }
    limpiarValor();
}

function limpiarValor() {
    document.getElementById('amigo').value = '';
}