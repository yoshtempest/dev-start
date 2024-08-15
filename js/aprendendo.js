// while é usado para repetir um código.

/*let zero = 0;
while (zero < 10) {
  console.log("Esta é a repetição número " + zero);
  zero++;
}
*/

// O código abaixo é usado para criar uma interface de digitação para o usuário.

/*const lerlinha = require('readline');
const lendolinha = lerlinha.createInterface({
  input: process.stdin,
  output: process.stdout
});
lendolinha.question('Digite algo: ', (answer) => {
  soma = answer * 2
  console.log(soma)
  lendolinha.close();
});
*/
const lerlinha = require('readline');

const lendolinha = lerlinha.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
for (count; count<4; count+=1) {

lendolinha.question('Digite algo: ', (answer) => {
    console.log(answer)
  lendolinha.close();
});
}