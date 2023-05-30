var cep = document.getElementById('cep')
var cidade = document.getElementById('cidade')
var logradouro = document.getElementById('endereco')
var bairro = document.getElementById('bairro')
var estado = document.getElementById('estado')

async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPJSON = await consultaCEP.json()
        if (consultaCEPJSON.erro) {
            throw Error('Este CEP não existe.')
        }

        cidade.value = consultaCEPJSON.localidade
        logradouro.value = consultaCEPJSON.logradouro
        bairro.value = consultaCEPJSON.bairro
        estado.value = consultaCEPJSON.uf

        return consultaCEPJSON
    } catch(erro) {
        return ('O CEP deve conter 8 digitos')
    }
}

// array de CEPs
// let ceps = ['01001000', '13273649', '01001001']
// let conjuntoCEPs = ceps.map(cep => buscaEndereco(cep))

// Promise.all(conjuntoCEPs).then(respostas => console.log(respostas))

cep.addEventListener("focusout", () => buscaEndereco(cep.value))