let botaoOrdenaPreco = document.getElementById("btnOrdenarPorPreco")
botaoOrdenaPreco.addEventListener('click', ordernarLivros)

function ordernarLivros() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    console.table(livrosOrdenados)
    exibirLivros(livrosOrdenados) 
}
