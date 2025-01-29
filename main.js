const form = document.getElementById('contato-form');
const imgContato = `<img src="./Screenshot 2024-11-15 at 20-50-06 Aplique efeitos e animações — EBAC LMS.png" id="imagem" />`;

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const imagemDoContato = document.getElementById('imagem');
    const inputNomeDoContato = document.getElementById('nome');
    const inputNumeroDoContato = document.getElementById('telefone');

    let linha = '<p>';
    linha += `<p>${imagemDoContato.value}</p>`
    linha += `<p>${inputNomeDoContato.value}</p>`;
    linha += `<p>${inputNumeroDoContato.value}</p>`;
    linha += '</p>'

    linhas += linha;

    const corpoContato = document.getElementById('nome-contato');
    corpoContato.innerHTML = linhas;

    inputNomeDoContato.value = '';
    inputNumeroDoContato.value = '';

})