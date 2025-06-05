import { useState } from "react";
import { fixLayout } from "./translit";
import copyIcon from './assets/copy.svg';

import "./index.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [fixedText, setFixedText] = useState("");

  const handleFix = () => {
    const result = fixLayout(inputText);
    setFixedText(result);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Transliterator</h1>
      </header>

      <main className="app-main">
        <div className="text-columns">
          <div className="column">
            <h2>Введіть текст:</h2>
            <textarea
              placeholder="Текст для транслітерації..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className="column result-column">
            <h2>Результат:</h2>
            <div className="textarea-wrapper">
              <textarea
                placeholder="Виправлений текст..."
                value={fixedText}
                readOnly
              />

<button
  className="copy-button"
  onClick={() => navigator.clipboard.writeText(fixedText)}
  title="Копіювати"
>
  <img src={copyIcon} alt="Копіювати" width="20" height="20" />
</button>

            </div>
          </div>
        </div>

<div className="fix-button-wrapper">
  <button className="fix-button" onClick={handleFix}>Виправити</button>
</div>

      </main>

      <footer className="app-footer">
        <p>© 2025 Transliterator. Усі права захищено.</p>
      </footer>
    </div>
  );
}

export default App;
