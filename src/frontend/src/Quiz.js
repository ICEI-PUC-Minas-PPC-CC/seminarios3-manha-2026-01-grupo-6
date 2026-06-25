import React, { useState, useEffect, useCallback } from 'react';
import './Quiz.css';

// 1. FUNÇÕES AUXILIARES (Ficam fora do componente para não gerar warnings)
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function criarOpcoes(itemCorreto, todosOsValores) {
  const outrasOpcoes = todosOsValores.filter((v) => v.id !== itemCorreto.id);
  const incorretasEmbaralhadas = embaralhar(outrasOpcoes);
  const comboOpcoes = [itemCorreto, ...incorretasEmbaralhadas.slice(0, 3)];
  
  return {
    significado: itemCorreto.significado,
    respostaCorretaId: itemCorreto.id,
    opcoes: embaralhar(comboOpcoes),
  };
}

// 2. COMPONENTE PRINCIPAL
function Quiz({ valores }) {
  const [listaDoJogo, setListaDoJogo] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [perguntaAtual, setPerguntaAtual] = useState(null);
  const [selecionado, setSelecionado] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const LIMITE_PERGUNTAS = 5;

  // Função para (re)inicializar o jogo
  const iniciarNovoJogo = useCallback(() => {
    const valoresEmbaralhados = embaralhar(valores);
    setListaDoJogo(valoresEmbaralhados.slice(0, LIMITE_PERGUNTAS));
    setIndiceAtual(0);
    setSelecionado(null);
    setAcertos(0);
    setJogoFinalizado(false);
    setPerguntaAtual(null);
  }, [valores]);

  // Efeito 1: Dispara o início do jogo assim que os dados da API chegam
  useEffect(() => {
    if (valores && valores.length >= 4 && listaDoJogo.length === 0) {
      iniciarNovoJogo();
    }
  }, [valores, listaDoJogo.length, iniciarNovoJogo]);

  // Efeito 2: Monta a estrutura da pergunta (com as 4 opções) toda vez que muda o índice
  useEffect(() => {
    if (listaDoJogo.length > 0 && indiceAtual < LIMITE_PERGUNTAS) {
      const itemCorreto = listaDoJogo[indiceAtual];
      const novaPergunta = criarOpcoes(itemCorreto, valores);
      setPerguntaAtual(novaPergunta);
    }
  }, [indiceAtual, listaDoJogo, valores]);

  // Se a API ainda estiver vazia ou carregando
  if (valores.length < 4) {
    return (
      <section className="quiz-section">
        <h2>🧠 Quiz das Virtudes</h2>
        <p>Carregando valores do servidor...</p>
      </section>
    );
  }

  // Tela de Fim de Jogo
  if (jogoFinalizado) {
    return (
      <section className="quiz-section">
        <h2>Fim de Jogo! 🏁</h2>
        <div className="quiz-card">
          <p className="quiz-resultado-final">
            Você acertou <strong>{acertos}</strong> de <strong>{LIMITE_PERGUNTAS}</strong> perguntas!
          </p>
          <button className="quiz-proxima-btn" onClick={iniciarNovoJogo}>
            Jogar Novamente 🔄
          </button>
        </div>
      </section>
    );
  }

  if (!perguntaAtual) return null;

  // Lógica do clique nos botões
  const responder = (opcao) => {
    if (selecionado) return;
    setSelecionado(opcao.id);
    if (opcao.id === perguntaAtual.respostaCorretaId) {
      setAcertos((a) => a + 1);
    }
  };

  // Avançar ou finalizar
  const proximaPergunta = () => {
    if (indiceAtual < LIMITE_PERGUNTAS - 1) {
      setSelecionado(null);
      setIndiceAtual((prev) => prev + 1);
    } else {
      setJogoFinalizado(true);
    }
  };

  const getClasseOpcao = (opcao) => {
    if (!selecionado) return 'quiz-opcao';
    if (opcao.id === perguntaAtual.respostaCorretaId) return 'quiz-opcao correta';
    if (opcao.id === selecionado) return 'quiz-opcao incorreta';
    return 'quiz-opcao desabilitada';
  };

  return (
    <section className="quiz-section">
      <h2>🧠 Quiz das Virtudes</h2>
      <p className="quiz-placar">
        Pergunta: {indiceAtual + 1} / {LIMITE_PERGUNTAS} | Acertos: {acertos}
      </p>

      <div className="quiz-card">
        <p className="quiz-pergunta-label">Qual é a virtude?</p>
        <p className="quiz-significado">"{perguntaAtual.significado}"</p>

        <div className="quiz-opcoes">
          {perguntaAtual.opcoes.map((opcao) => (
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
            {selecionado === perguntaAtual.respostaCorretaId ? (
              <p className="quiz-feedback-acerto">✅ Isso! Resposta certa.</p>
            ) : (
              <p className="quiz-feedback-erro">
                ❌ Quase! A resposta certa era "
                {perguntaAtual.opcoes.find((o) => o.id === perguntaAtual.respostaCorretaId)?.titulo}".
              </p>
            )}
            <button className="quiz-proxima-btn" onClick={proximaPergunta}>
              {indiceAtual === LIMITE_PERGUNTAS - 1 ? 'Ver Resultado Final 🏁' : 'Próxima pergunta →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Quiz;