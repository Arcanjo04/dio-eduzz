// novo recurso do ES2015

const pessoa = {
    nome: 'perola',
    idade: 6,
    endereco: {
        logradouro: 'rua 11 de agosto',
        numero: 19
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: meuNome, idade: minhaIdade } = pessoa
console.log(meuNome, minhaIdade)

const { sobreNome, bemHumorada = true} = pessoa
console.log(sobreNome, bemHumorada)

const { endereco : { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)