let livros = []
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const livrosPai = document.getElementById("livros")

// busca o json com os dados dos livros
buscaLivrosDaAPI()

async function buscaLivrosDaAPI() {
    const res = await fetch(endpoint)
    livros = await res.json()
    let livrosComDesconto = aplicaDesconto(livros)
    exibirLivros(livrosComDesconto) 
}

// para cada livro da lista capturada, adiciona uma div com as infos do livro
function exibirLivros(livros) {
    // limpa a lista para garantir que quando os filtros forem usados a lista esteja vazia
    livrosPai.innerHTML = ''
    livros.forEach(livro => {
        // let disponibilidade = verificaDisponibilidade(livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        livrosPai.innerHTML += `<div class="livro">
                                    <img class="${disponibilidade}" src="${livro.imagem}" 
                                        alt="${livro.alt}" />
                                    <h2 class="livro__titulo"> ${livro.titulo}</h2>
                                    <p class="livro__descricao">${livro.autor}</p>
                                    <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                                    <div class="tags">
                                    <span class="tag">${livro.categoria}</span>
                                    </div>
                                </div>`
    })
}

// function verificaDisponibilidade(livro) {
//    if (livro.quantidade > 0) {
//        return 'livro__imagens'
//    } else {
//        return 'livro__imagens indisponivel'
//    }
// }