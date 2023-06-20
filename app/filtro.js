const botoesFiltros = document.querySelectorAll(".btn")

// para cada botão no cabeçalho pega o nome do botão ao clica-lo para selecionar o conteúdo certo que devera ser exibido na página
botoesFiltros.forEach((botao) => {
    botao.addEventListener('click', (filtraLivros))
})

// filtra os livros pela categoria clicada
function filtraLivros() {
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosFiltrados)
}