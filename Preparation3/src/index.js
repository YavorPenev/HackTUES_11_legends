import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ThemeChange() {
  const themes = ["rgb(31, 2, 84)", "black", "white"];
  const [i, changei] = useState(0);

  const bluebutton = {
    
  }

  const CycleTheme = () => {
    const nextIndex = (i + 1) % themes.length;
    changei(nextIndex);
    document.body.style.backgroundColor = themes[nextIndex];

    if (nextIndex === 1) {
      document.body.style.color = "white";
    } else {
      document.body.style.color = "black";
    }

    const button = document.querySelector("button");
    if (nextIndex === 2) {
      button.style.backgroundColor = "rgb(31, 2, 84)";
      button.style.color = "white";
    } else {
      button.style.backgroundColor = "white";
      button.style.color = "black";
    }
  };

  return (
    <div id='second-box'>
      <h1 id='forehead'>Click this button to change theme:</h1>
      <button onClick={CycleTheme}>CLICK ME!</button>
    </div>
  );
}

function CreateText() {
  const [text, changeText] = useState("Header №1");

  return(
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
      <h1 id="mainheader">Edit App.js and save to reload! So simple!</h1>
      <CreateText/>
      <ThemeChange/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

export default App;