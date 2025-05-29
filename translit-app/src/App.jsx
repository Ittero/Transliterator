import { useState } from 'react';
import './App.css';
import { translitEngToUkr } from './translit';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const handleTranslit = () => {
    const output = translitEngToUkr(inputText);
    setResult(output);
  };

  return (
    <div className="app-container">
      <h1>Транслітерація: Англійська → Українська</h1>

      <textarea
        placeholder="Введіть англійський текст"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={5}
        cols={50}
      />

      <br />

      <button onClick={handleTranslit}>Транслітерувати</button>

      <h3>Результат:</h3>
      <div className="output">{result}</div>
    </div>
  );
}

export default App;
