const NB = require('ml-bayes');

const by = new NB();

by.train("VIDA DOS SONHOS", 'historia de vida');
by.train("CONTANDO HISTORIA NA HORA DO ALMOÇO", 'Historias de Vida');
by.train("A MELHOR EPOCA PARA MUDAR PARA O CANADA", 'Historias de Vida');
by.train("GOPRO - COMO FILMAR PARA O INSTAGRAM STORIES", 'Dicas');
by.train("Como manter seu endereço nos EUA sempre atualizado?", 'Dicas');
by.train("Bate-papo com policial americano - Perguntas e respostas", 'Dicas');
by.train("ESCOLA NO CANADÁ - Matrícula, ônibus escolar, idade escolar, formulários, cuidados com as crianças", 'Dicas');
by.train("Meu Primeiro Carro nos EUA", 'Carros no Exterior');
by.train("PREÇO DOS CARROS EM SAN FRANCISCO NA CALIFÓRNIA EUA", 'Carros no Exterior');
by.train("PREÇO DAS MOTOS EM SAN FRANCISCO NA CALIFÓRNIA EUA", 'Carros no Exterior');
by.train("LUGARES ONDE EU TRABALHO NOS ESTADOS UNIDOS", 'Trabalho no Exterior');
by.train("EMPREENDER NO ESTERIOR: Posicionamento de produtos", 'Trabalho no Exterior');
by.train("FOMOS PARA O CANADÁ E ACABOU O DINHEIRO. E AGORA?", 'Trabalho no Exterior');
by.train("$50 DOLARES E UM TANQUE CHEIO!!! QUANTO VOCE PAGA PELA GASOLINA NO BRASIL???", 'Custo de Vida');
by.train("QUNTO CUSTA VIAJAR PARA OS ESTADOS UNIDOS", 'Custo de Vida');
by.train("COMPRAR OU ALUGAR IMóVEL NO CANADÁ, O QUE VALE MAIS A PENA? - FINANCIAMENTO DE IMÓVEIS NO CANADÁ", 'custo de vida');

const analyzePhrase = (phrase) => {
  const score = by.gyess(phrase);
  const result = by.extractWinner(score);
  const numScore = result.score;
  const label = result.label;

  return `${phrase} - SCORE: ${numScore.toFixed(2)} RÓTULO: ${label}`;
}

module.exports = analyzePhrase;