# Eu não aguento mais

- Como somar números:

  - Antes de calcular a soma, precisamos criar uma variável para armazenar o resultado do cálculo.
  - Essa variável precisa ser inicializada com o valor 0
  - Para adicionar um novo valor à soma, podemos escrever: soma = soma + 10. Assim o número 10 será somado ao valor que a variável já tem.

- Soma com iteração de matriz:

  - Use a iteração de matriz com .forEach() para calcular a soma dos itens da matriz.
  - O local correto para inicializar a variável da soma é antes do .forEach().

- Soma dentro da função:

  - A lógica que faz a soma dos itens de uma matriz pode ser inserida dentro de uma função.
  - Não insira o return no lugar errado seu troxa.

- Somando com condicional:

  - Usa o if para impor uma requisição no cálculo.

- Redução por soma:

  - O método .reduce() recebe dois parâmetros: o redutor e o valor inicial.
  - Para a redução por soma, o valor inicial é sempre 0.
  - O redutor é uma função callback que recebe dois argumentos: total e atual.
  - A variável total (acumulador) é atualizada a cada passo da redução. Na redução por soma, ela contém a soma acumulada dos itens anteriores da matriz, mais o item atual.
  - A variável atual representa um item da matriz.
  - O redutor é chamado para cada item da matriz.

## [Voltar](../README.md)
