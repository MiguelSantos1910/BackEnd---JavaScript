const ano_atual = new Date().getFullYear();
let livro = {
    titulo: 'Senhor dos Anéis: A Sociedade do Anel',
    autor: 'J.R.L Token',
    ano_publicacao: 1954,
    genero: 'Fantasia'
};
livro.idade_publicacao = ano_atual - livro.ano_publicacao;
livro.genero = 'Aventura';
/*
livro.avaliacao = null;
if(livro['avaliacao'] === null){
    livro.avaliacao = 'Sem avaliações';
}else{
    livro.avaliacao = 4.5;
}
*/