const form = document.getElementById('contato-form');

function validaNome(nomeCompleto) {
    const nomeDoContato = document.getElementById('nome');
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    
    const numeroDoContato = document.getElementById('telefone')
})




console.log('form')

