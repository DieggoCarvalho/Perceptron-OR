// Definir os valores de input e output esperados
const entradas = [[0, 0], [0, 1], [1, 0], [1, 1]]; // array de valores de input, todas as combinações possíveis de entradas.
const saidasEsperadas = [0, 1, 1, 1]; //array de valores de output

// Inicializar os pesos sinápticos e o bias [0,1]
let w1 = Math.random(); //gerar número aleatório [0,1] para o peso sináptico w1
let w2 = Math.random();  //gerar número aleatório [0,1] para o peso sináptico w2
let b = Math.random();  //gerar número aleatório [0,1] para o BIAS

// Definir a função de ativação degrau
function stepFunction(x) { //converter o somatório de inputs ponderados e bias -> output binário [0,1]
  if (x >= 0) {
    return 1;
  } else {
    return 0;
  }
}

// Definir a função de treinamento da rede neural
function treinar() { //algoritmo de aprendizagem supervisionado
  const taxaAprendizagem = 0.1;
  const epocasMaximas = 1000;
  let epoca = 0;
  let erro = 1;
  while (epoca < epocasMaximas && erro !== 0) {
    erro = 0;
    for (let i = 0; i < entradas.length; i++) {
      const entrada = entradas[i];
      const saidaEsperada = saidasEsperadas[i];
      const somatorio = entrada[0] * w1 + entrada[1] * w2 + b;
      const saidaCalculada = stepFunction(somatorio);
      const erroAtual = saidaEsperada - saidaCalculada;
      w1 += taxaAprendizagem * erroAtual * entrada[0];
      w2 += taxaAprendizagem * erroAtual * entrada[1];
      b += taxaAprendizagem * erroAtual;
      erro += Math.abs(erroAtual);
    }
    epoca++;
  }
}

// Treinar a rede neural -> executar função.
treinar();

// Testar a rede neural Perceptron
for (let i = 0; i < entradas.length; i++) { //for (let i = 0; i < entradas)
  const entrada = entradas[i];
  const somatorio = entrada[0] * w1 + entrada[1] * w2 + b;
  const saidaCalculada = stepFunction(somatorio);
  //console.log(`Entrada: ${entrada[0]}, ${entrada[1]} - Saída: ${saidaCalculada}`);
  let idOutput = `output--${i}`;
  const perceptronOutput = document.getElementById(idOutput);
  let msgOutput = `<b>Entrada:</b> ${entrada[0]}, ${entrada[1]} - <b>Saída:</b> ${saidaCalculada}`;
  perceptronOutput.innerHTML = msgOutput;
}
