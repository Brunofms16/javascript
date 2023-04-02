const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questions = [
  {
    question: "Qual é o seu animal favorito?",
    answers: [
      { text: "Cavalo", result: "Ednaldo Pereira" },
      { text: "Gato", result: "Árvore Mística" },
      { text: "Cachorro", result: "Nal do Canal" },
      { text: "Papagaio", result: "Manoel Gomes" },
      { text: "Tigre", result: "DJ Beiçola" },
    ]
  },
  {
    question: "Qual é a sua cor favorita?",
    answers: [
      { text: "Vermelho", result: "Ednaldo Pereira" },
      { text: "Azul", result: "Árvore Mística" },
      { text: "Verde", result: "Nal do Canal" },
      { text: "Preto", result: "Manoel Gomes" },
      { text: "Amarelo", result: "DJ Beiçola" },
    ]
  },
  {
    question: "Qual é a sua comida favorita?",
    answers: [
      { text: "Arroz e Feijão", result: "Ednaldo Pereira" },
      { text: "Pizza", result: "Árvore Mística"},
      { text: "Hamburguer", result: "Árvore Mística"},
      { text: "Lasanha", result: "Árvore Mística"},
      { text: "Churrasco", result: "Árvore Mística"},
    ]}