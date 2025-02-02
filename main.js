const form = document.getElementById('contato-form');
const imgContato = `<img src="./Screenshot 2024-11-15 at 20-50-06 Aplique efeitos e animações — EBAC LMS.png" id="imagem" >`;
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    
    const imagemDoContato = document.querySelector('img');
    const inputNomeDoContato = document.getElementById('nome');
    const inputNumeroDoContato = document.getElementById('telefone');

    nome.push(inputNomeDoContato.value);
    telefone.push(inputNumeroDoContato.value);

    let linha = '<p>';
    linha += `<p>${imagemDoContato.value}</p>`
    linha += `<p>${inputNomeDoContato.value}</p>`;
    linha += `<p>${inputNumeroDoContato.value}</p>`;
    linha += '</p>'

    linhas += linha;


    inputNomeDoContato.value = '';
    inputNumeroDoContato.value = '';
}

function atualizaTabela() {
    
    const corpoContato = document.querySelector('p');
    corpoContato.innerHTML = linhas;
}

