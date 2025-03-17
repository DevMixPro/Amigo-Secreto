let listaAmigos = [];

function agregarAmigo(){
    if (document.getElementById("amigo").value === ''){
        alert("Digita el nombre de un amigo")
    } else {
        listaAmigos.push(document.getElementById("amigo").value);
    }
    console.log(listaAmigos);
    document.querySelector("input").value = "";
    document.getElementById("resultado").innerHTML = "";
    recorrerLista();
}

function recorrerLista(){
    const ul = document.getElementById("listaAmigos");
    document.getElementById("listaAmigos").innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++){
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        ul.appendChild(li);
    }
}

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("No hay ningun amigo en la lista")
    } else {
        let amigoAleatorio = Math.floor(Math.random()*listaAmigos.length)+1;
        const ul = document.getElementById("resultado");
        document.getElementById("listaAmigos").innerHTML = "";

        const li = document.createElement('li');
        li.textContent = (`El amigo secreto es: ${listaAmigos[amigoAleatorio]}`);
        ul.appendChild(li);
        reiniciar();
    }
}

function reiniciar(){
    listaAmigos = [""];
}