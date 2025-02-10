//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo(){
    let validarNome = document.querySelector('input').value;
    if(validarNome == ''){
        alert("Por favor, insira um nome.")
    }else{
        amigos.push(validarNome)
        console.log(amigos)
        limparCampo()
        
    }    
};
 function limparCampo() {
    validarNome = document.querySelector('input');
    validarNome.value = '';
 }
 