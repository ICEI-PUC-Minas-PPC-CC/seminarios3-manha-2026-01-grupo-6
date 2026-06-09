import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [valores, setValores] = useState([
  ]);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/valores')
      .then(res => res.json())
      .then(data => setValores(data))
      .catch(err => console.error("Erro ao carregar valores:", err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>VIRTUDES</h1>
        <p>Clique em um cartão para mostrar seu significado e o Sinal</p>
      </header>

      {/* Grade de 15 cards */}
      <div className="grid">
        {valores.map(item => (
          <div 
            key={item.id} 
            className="card" 
            onClick={() => setItemSelecionado(item)}
          >
            {item.titulo}
          </div>
        ))}
      </div>

      {/* Modal (Segunda Tela) */}
      {itemSelecionado && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setItemSelecionado(null)}>×</button>
            
            <h3>{itemSelecionado.titulo}: Representação visual</h3>
            
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${itemSelecionado.youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="significado-box">
              <strong>Significado:</strong>
              <p>{itemSelecionado.significado}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;