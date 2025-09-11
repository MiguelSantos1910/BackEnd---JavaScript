const ano_atual = new Date().getFullYear();
let livro = {
    titulo: 'Senhor dos Anéis: A Sociedade do Anel',
    autor: 'J.R.L Token',
    ano_publicacao: 1954,
    genero: 'Fantasia'
};
livro.idade_publicacao = ano_atual - livro.ano_publicacao;
console.log('Titulo: ' + livro['titulo']);
console.log('Autor: ' + livro['autor']);
console.log('Ano de Publicação: ' + livro['ano_publicacao']);
console.log('Gênero: ' + livro['genero']);
console.log('Idade de Publicação:' + livro['idade_publicacao'] + ' anos');