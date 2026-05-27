import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [virtudes, setVirtudes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/valores")
      .then((response) => response.json())
      .then((data) => {
        setVirtudes(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar virtudes:", error);
      });
  }, []);

  return (
    <div className="app">
      <header className="site-header">
        <h1>Glossário das Virtudes</h1>
        <p className="lead">
          Clique em uma virtude para ver seu significado.
        </p>
      </header>

      <main className="container">
        <div className="cards">
          {virtudes.map((virtude) => (
            <details className="card" key={virtude.id}>
              <summary className="card-summary">
                <span className="term">{virtude.titulo}</span>
              </summary>

              <div className="card-body">
                <p className="definition">
                  {virtude.significado}
                </p>
              </div>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;