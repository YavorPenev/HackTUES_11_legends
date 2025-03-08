import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ThemeChange() {
  const [i, changei] = useState(0);

  const themes = ["whiteButton", "whiteButton", "blueButton"];
  const backgroundThemes = ["blueBackground", "blackBackground", "whiteBackground"];

  const CycleTheme = () => {
    const nextIndex = (i + 1) % themes.length;
    changei(nextIndex);

    const buttons = document.querySelectorAll("button");

    document.body.classList.remove(...backgroundThemes);
    buttons.forEach((button) => {
      button.classList.remove("whiteButton", "blueButton");
    });

    document.body.classList.add(backgroundThemes[nextIndex]);
    buttons.forEach((button) => {
      button.classList.add(themes[nextIndex]);
    });
  };

  return (
    <div id='second-box'>
      <h1 id='forehead'>Click this button to change theme:</h1>
      <button id='fifth-button' onClick={CycleTheme}>CLICK ME!</button>
    </div>
  );
}

function CreateText() {
  const [text, changeText] = useState("Header №1");

  return (
    <>
      <h2 id="forehead">This is {text}</h2>
      <div className='buttflex'>
        <button onClick={() => changeText("Header №1")}>Click me for different header!</button>
        <button onClick={() => changeText("Header №2")}>Click me for different header!</button>
        <button onClick={() => changeText("Header №3")}>Click me for different header!</button>
        <button onClick={() => changeText("Header №4")}>Click me for different header!</button>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1 id="mainheader">React.js is a bitch!</h1>
      <CreateText/>
      <ThemeChange/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

export default App;