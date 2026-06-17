import React, { useState } from 'react';
import './Quiz.css';

// Embaralha um array sem alterar o original
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Monta uma pergunta a partir da lista de valores:
// escolhe um valor como resposta certa e 3 outros como opções erradas
function gerarPergunta(valores) {
  const opcoesEmbaralhadas = embaralhar(valores);
  const correta = opcoesEmbaralhadas[0];
  const opcoes = embaralhar(opcoesEmbaralhadas.slice(0, 4));

  return {
    significado: correta.significado,
    respostaCorretaId: correta.id,
    opcoes,
  };
}

function Quiz({ valores }) {
  const [pergunta, setPergunta] = useState(() =>
    valores.length >= 4 ? gerarPergunta(valores) : null
  );
  const [selecionado, setSelecionado] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [total, setTotal] = useState(0);

  if (!pergunta) {
    return (
      <section className="quiz-section">
        <h2>🧠 Quiz das Virtudes</h2>
        <p>Carregando valores para montar o quiz...</p>
      </section>
    );
  }

  const responder = (opcao) => {
    if (selecionado) return; // já respondeu essa pergunta

    setSelecionado(opcao.id);
    setTotal((t) => t + 1);
    if (opcao.id === pergunta.respostaCorretaId) {
      setAcertos((a) => a + 1);
    }
  };

  const proximaPergunta = () => {
    setPergunta(gerarPergunta(valores));
    setSelecionado(null);
  };

  const getClasseOpcao = (opcao) => {
    if (!selecionado) return 'quiz-opcao';
    if (opcao.id === pergunta.respostaCorretaId) return 'quiz-opcao correta';
    if (opcao.id === selecionado) return 'quiz-opcao incorreta';
    return 'quiz-opcao desabilitada';
  };

  return (
    <section className="quiz-section">
      <h2>🧠 Quiz das Virtudes</h2>
      <p className="quiz-placar">
        Pontuação: {acertos} / {total}
      </p>

      <div className="quiz-card">
        <p className="quiz-pergunta-label">Qual é a virtude?</p>
        <p className="quiz-significado">"{pergunta.significado}"</p>

        <div className="quiz-opcoes">
          {pergunta.opcoes.map((opcao) => (
            <button
              key={opcao.id}
              className={getClasseOpcao(opcao)}
              onClick={() => responder(opcao)}
              disabled={!!selecionado}
            >
              <span className="quiz-opcao-emoji">{opcao.emoji}</span>
              {opcao.titulo}
            </button>
          ))}
        </div>

        {selecionado && (
          <div className="quiz-feedback">
            {selecionado === pergunta.respostaCorretaId ? (
              <p className="quiz-feedback-acerto">✅ Isso! Resposta certa.</p>
            ) : (
              <p className="quiz-feedback-erro">
                ❌ Quase! A resposta certa era "
                {pergunta.opcoes.find((o) => o.id === pergunta.respostaCorretaId)?.titulo}".
              </p>
            )}
            <button className="quiz-proxima-btn" onClick={proximaPergunta}>
              Próxima pergunta →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Quiz;
