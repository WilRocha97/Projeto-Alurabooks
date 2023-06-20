const botoesFiltros = document.querySelectorAll(".btn")

// para cada botão no cabeçalho pega o nome do botão ao clica-lo para selecionar o conteúdo certo que devera ser exibido na página
botoesFiltros.forEach((botao) => {
    botao.addEventListener('click', (filtraLivros))
})

// filtra os livros pela categoria clicada
function filtraLivros() {
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : filtrarCategoria(categoria)
    exibirLivros(livrosFiltrados)
    if  (categoria == 'disponivel') {
        const valorTotal = calculaValorTotal(livrosFiltrados)
        console.log(valorTotal)
        exibeValorTotal(valorTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotal(valorTotal) {
    elementoValorTotal.innerHTML = `<div class="livros__disponiveis">
                                        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
                                    </div>`
}