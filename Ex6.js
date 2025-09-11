const ano_atual = new Date().getFullYear();
let livro = {
    titulo: 'Senhor dos Anéis: A Sociedade do Anel',
    autor: 'J.R.L Token',
    ano_publicacao: 1954,
    genero: 'Fantasia'
};
livro.idade_publicacao = ano_atual - livro.ano_publicacao;
let detalhes = `Título: ${livro.titulo}
    Autor: ${livro.autor}
    Lançamento: ${livro.ano_publicacao}
    Gênero: ${livro.genero}
    Idade de Publicação: ${livro.idade_publicacao} anos`;
console.log(detalhes)