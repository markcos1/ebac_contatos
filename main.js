const form = document.getElementById('contato-form');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    
    const inputNomeDoContato = document.getElementById('nome');
    const inputNumeroDoContato = document.getElementById('telefone');

    nome.push(inputNomeDoContato.value);
    telefone.push(inputNumeroDoContato.value);

    let linha = '<td>';
    linha += `<td>${inputNomeDoContato.value}</td>`;
    linha += `<td>${inputNumeroDoContato.value}</td>`;
    linha += '</td>'

    linhas += linha;


    inputNomeDoContato.value = '';
    inputNumeroDoContato.value = '';
}

function atualizaTabela() {
    
    const corpoContato = document.querySelector('td');
    corpoContato.innerHTML = linhas;
}

