const readline = require('readline');

// Cria uma interface para ler dados do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita uma entrada do usuário
rl.question('Digite algo: ', (answer) => {
  // Imprime a resposta do usuário
  console.log(`Você digitou: ${answer}`);
  
  // Fecha a interface de leitura
  rl.close();
});