//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo(){
    let validarNome = document.querySelector('input').value;
    if(validarNome == ''){
        alert("Por favor, insira um nome.")
    }else{
        amigos.push(validarNome)
        console.log(amigos)
        atualizarLista()
        limparCampo()
       
    }    
};
 function limparCampo() {
    validarNome = document.querySelector('input');
    validarNome.value = '';
 }
 function atualizarLista() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = ""; 

    for (const amigo of amigos) {
        let li = document.createElement("li"); 
        li.textContent = amigo; 
        listaDeAmigos.appendChild(li); 
    }
}
function sortearAmigo(){
    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML= "";
    if(amigos.length>=2){
        let indiceAleatorio= Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let li = document.createElement("li"); 
        li.textContent = `O seu amigo secreto é ${amigoSorteado}. `; 
        resultado.appendChild(li); 
    }else if(amigos.length==1){
        alert("Você precisa adcionar pelo mais um amigo para ter o sorteio.")
    }else{
        alert("Adicione amigos.")
    }
}