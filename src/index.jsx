import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import { ShemeColor } from './components/ShemeColor/ShemeColor';

const App = () => {
  return (
    
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>

      {
      palettes.map((jednaPaletaData) => {
      return <Paleta key={jednaPaletaData.name}props={jednaPaletaData} /> }
      )
      }
    
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  
  )
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
