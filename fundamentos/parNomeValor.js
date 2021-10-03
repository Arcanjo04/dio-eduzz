// par nome/valor
const saudacao = 'Opa' //contexto lexico 1

function exec()  {
    const saudacao = 'falaaa' // contexto lexico 2
    return saudacao 
}

// objetos sao grupos aninhados de pares nome/valor

 const cliente = {
     nome: 'Perola',
     idade: 6,
     endereco: {
         logradouro: '11 de agosto ok',
         numero: 19
     }
 }

 console.log(saudacao)
 console.log(exec())
 console.log(cliente)