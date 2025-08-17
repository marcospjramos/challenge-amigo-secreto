//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function exibirListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    // loop que percorre os todos os elemento da lista
    for (var i = 0; i < listaAmigos.length; i++) {
        // cria um novo elemento li
        let li = document.createElement('li');
        // define o texto do li como o nome do amigo atual
        li.textContent = listaAmigos[i];
        // adiciona o li a lista
        lista.appendChild(li);
    }
}

function adicionarAmigo(){
    let nomeDoAmigo = document.getElementById('amigo').value;
    if (nomeDoAmigo.trim() == ''){
        alert('Por favor, insira um nome');
    } else {
    if (listaAmigos.includes(nomeDoAmigo)) {
        alert('Nome já consta na lista');
        limparCampo();
    } else {
        // zera o campo resultado
        document.getElementById('resultado').innerHTML = ''
        // adiciona o nome a lista
        listaAmigos.push(nomeDoAmigo);
        // limpa o campo onde fica os amigos para evitar duplicar a lista
        limparCampo();
        // exibi a nova lista
        exibirListaAmigos();
    }
    }
}

function limparCampo() {
    let nomeDoAmigo = document.getElementById('amigo');
    nomeDoAmigo.value = '';
}

function sortearAmigo() {
    if (listaAmigos.length != 0) {
        // cria um indice para o sorteio do amigo
        indiceAmigo = Math.floor((Math.random() * listaAmigos.length));
        // pega o campo de resultado e insere a mensagem utilizando o indice
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = `O amigo secreto sorteado é ${listaAmigos[indiceAmigo]}`;
        // zera a lista de amigos
        listaAmigos = [];
        // retira os valores que estavam em exibição na tela
        exibirListaAmigos();
    } else if (listaAmigos.length == 0){
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = '';
    }
}