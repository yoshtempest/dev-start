# Métodos(códigos)

- Let

  - Pelo amor de Deus, não se esqueça de usar let ao criar uma variável.

- Propriedade .length:

  - O .length é uma propriedade que retorna o comprimento (número de itens) da matriz.
  - Em matrizes vazias o .length retorna 0.

- Método .trim()

  - O método .trim() nos permite fazer uma nova cópia de uma string, removendo os espaços iniciais e finais.

- Reatribuindo valor à variável:

  - Os métodos .trim(), .toUpperCase() e toLowerCase() criam novas cópias da variável. Eles não alteram a váriavel original.
  - Para alterar a variável, você deve reatribuir essa variável a ela mesma com uma chamada de função.

- Método .push()

  - O método .push() adiciona um item em uma matriz.
  - A propriedade .length sempre reflete o número correto de itens dentro da matriz.

- Retorno do .push()

  - O método .push() não retorna uma matriz. Ele retorna um número, que é o novo comprimento da matriz após o acréscimo do novo item que você solicitou.
  - Ao escrever uma função, verifique se o valor que ela deve retornar é o resultado do método .push(), ou se é uma matriz.

- Método .includes()

  - O método .includes permite verificar se um item existe dentro da matriz.
  - O retorno desse método é do tipo booleano. Ele será true se o item for encontrado dentro da matriz, e false caso contrário.
  - O .includes() só pode ser chamado apartir de uma matriz.

- Método .join()

  - O método .join() converte a matriz em uma string.
  - Na string retornada pelo .join(), os caracteres passados como parámetro são inseridos entre os itens da matriz.
  - CSV significa Comma Separated Values, ou valores separados por vírgula. Trata-se de um formato de arquivo que pode ser importado pelo excel.

- Método .forEach()

  - O método .forEach permite iterar com os elementos da matriz.
  - A função que você passar como parâmetro para o .forEach() será chamada para cada item da matriz.

- Callback:

  - A função callback é passada como parâmetro do .forEach, e será chamada automaticamente pela linguagem de programação.
  - Podemos remover o nome de uma função callback. Ela passa, então, a ser considerada uma função anônima.
  - O "for each" chama a função callback e passa a ela um item da matriz como parâmetro. Esse processo é repetido para todos os itens dessa matriz.

- Sintaxe do forEach:

  - Quando estiver trabalhando com iteração em matrizes, fique atento a dois elementos:
    - A chamada função do .forEach()
    - A função callback passada para o .forEach() como parâmetro.
  - Sempre use plural no nome da matriz e singular no nome do item da matriz.
  - Sempre importe o item da matriz no console.

- Mapa de matriz I:

  - O método .map() permite que você aplique uma transformação para cada item de uma matriz.
  - O resultado do .map() será uma outra matriz contendo o mesmo número de itens da matriz original, mas com a transformação aplicada.

- Mapa de matriz II:

  - A função callback passada como parâmetro para o .map() será aplicada para cada item da matriz.
  - Essa função permite que você realize uma transformação em cada item
  - Não confunda o .forEach() e .map(). O primeiro serve para fazer iteração na matriz, e o segundo serve para gerar uma nova matriz com alguma transformação aplicada em relação à matriz original.

- O que é redução:

  - O método .reduce() é usado para calcular um único valor a partir de uma matriz.
  - Ao trabalhar com matrizes de números, os casos de uso mais comuns do .reduce() são a soma e a multiplicação.
  - O método .reduce() aceita um redutor.
  - o redutor é um callback que determina a lógica usada para reduzir a matriz a um único número.

## [Voltar](../README.md)
