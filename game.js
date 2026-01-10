const TOTAL_QUESTOES = 5;

let current = 0;
let score = 0;
let acertos = 0;
let erros = 0;
let respondeu = false;

// Banco embaralhado usado no jogo
let perguntasDoJogo = [];

// Guarda detalhes das questões erradas
let errosDetalhados = [];

/**
 * Embaralha array (Fisher-Yates)
 */
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function iniciarJogo() {
  // cria nova rodada embaralhada
  perguntasDoJogo = embaralhar(questions);
  current = 0;
  score = 0;
  acertos = 0;
  erros = 0;
  errosDetalhados = [];
  respondeu = false;

  carregarQuestao();
}

function carregarQuestao() {
  if (current >= TOTAL_QUESTOES || current >= perguntasDoJogo.length) {
    finalizarJogo();
    return;
  }

  const q = perguntasDoJogo[current];

  document.getElementById("enunciado").innerText =
    `${current + 1}. ${q.enunciado}`;

  document.getElementById("contador").innerText =
    `Questão ${current + 1} de ${TOTAL_QUESTOES}`;

  const progresso = (current / TOTAL_QUESTOES) * 100;
  document.getElementById("barra").style.width = `${progresso}%`;

  document.getElementById("feedback").innerHTML = "";
  respondeu = false;
}

function responder(resposta) {
  if (respondeu) return;

  const q = perguntasDoJogo[current];
  let mensagem = "";

  if (resposta === q.correta) {
    score += 1;
    acertos += 1;
    mensagem = `<span style="color:green;"><strong>✔️ Correto.</strong></span>`;
  } else {
    score -= 1;
    erros += 1;

    errosDetalhados.push({
      tema: q.tema,
      enunciado: q.enunciado,
      justificativa: q.justificativa
    });

    mensagem = `<span style="color:red;"><strong>❌ Errado.</strong></span>`;
  }

  document.getElementById("feedback").innerHTML = `
    ${mensagem}<br>
    <em>${q.justificativa}</em>
  `;

  respondeu = true;
}

function proximaQuestao() {
  if (!respondeu) return;
  current++;
  carregarQuestao();
}

function finalizarJogo() {
  document.getElementById("game").style.display = "none";
  document.getElementById("resultado").style.display = "block";
  document.getElementById("barra").style.width = "100%";

  const acertou = acertos;
  const errou = errosDetalhados.length;
  const total = acertou + errou;
  const liquido = acertou - errou;

  // impede percentual negativo
  const percentual = total > 0 ? Math.max(0, Math.round((liquido / total) * 100)) : 0;

  // medalha
  let medalha = '';
  if (percentual >= 80) {
    medalha = '🥇 OURO';
  } else if (percentual >= 60) {
    medalha = '🥈 PRATA';
  } else {
    medalha = '⚪ Sem medalha';
  }

  let pontosFracosHTML = "";

  const errosPorTema = {};
  errosDetalhados.forEach(e => {
    if (!errosPorTema[e.tema]) {
      errosPorTema[e.tema] = [];
    }
    errosPorTema[e.tema].push(e);
  });

  for (const tema in errosPorTema) {
    pontosFracosHTML += `<h4>${tema}</h4><ul>`;
    errosPorTema[tema].forEach(e => {
      pontosFracosHTML += `
        <li>
          <strong>Questão:</strong> ${e.enunciado}<br>
          <em>${e.justificativa}</em>
        </li><br>
      `;
    });
    pontosFracosHTML += `</ul>`;
  }

  document.getElementById("resultado").innerHTML = `
    <h2>Resultado Final</h2>

    <p><strong>Acertos:</strong> ${acertou}</p>
    <p><strong>Erros:</strong> ${errou}</p>
    <p><strong>Pontuação líquida:</strong> ${liquido}</p>
    <p><strong>Percentual líquido:</strong> ${percentual}%</p>

    <h3>Medalha conquistada: ${medalha}</h3>

    <h3>Pontos Fracos (revisão)</h3>
    ${pontosFracosHTML || "<p>Nenhum ponto fraco identificado 🎉</p>"}
  `;
}

// inicia jogo ao abrir a página
window.onload = iniciarJogo;
