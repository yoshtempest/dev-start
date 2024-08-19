/*

function calculamedia(nota1, nota2){
    let soma = nota1 + nota2
    let media = soma / 2
    console.log(media)
    return media
}

///

let matriz = ["rammus", "yasuo", "tapioca"]
console.log(matriz[0])

///

let eu = "marcelo"
let temperatura = [1, 2, 4]
temperatura.push(`${eu}`)
console.log(temperatura)

///

let armor = 80
let numeros = [1, 2, 4]
let string = numeros.join(armor)
console.log(string)

///

function calculasoma(itens){
    let soma = 0
    itens.forEach(function(item){
        soma = soma + item
    })
    return soma
}

calculasoma([1, 2, 4, 7])
console.log(calculasoma([1, 2, 4, 7]))

///

let numeros = [1, 2, 4, 7, 10, 3, 5]

let multiplica = numeros.reduce(function(total, atual) {
    return total * atual
})
console.log(multiplica)

///

function somaNumeros(numeros){
    let soma = 0
    numeros.forEach(function(numero){
      soma = soma + numero
    })
    return soma
  }

///

let usuarios = ["gustavo", "marcelo"]
let plano = usuarios[0].length
console.log(plano)

///

function nomesEmMinusculas(nomes){
  let nomesMinusculos = nomes.map(function(nome){
    return nome.toLowerCase()
  })
  return nomesMinusculos
}

console.log(nomesEmMinusculas(["Alice", "Bruno"]))

*/

let strings = ["imã", "Dado",  "irmão",  "Outro",  "Tetriz", "Ação"]

let caracteres = strings.map(function(string){
  return string[0]
})
console.log(caracteres)