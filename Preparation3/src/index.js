import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = (step) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + step;
      if (newIndex >= 4) return 0;
      if (newIndex < 0) return 3;
      return newIndex;
    });
  };

  const buttSlide = (input) => {
    setSlideIndex(input);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide(1);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main_buttons" id="carousel">
      <div className="slide" style={{ transform: slideIndex === 0 ? 'translateX(0)' : 'translateX(100%)' }}>
        <h2>Slide 1</h2>
      </div>
      <div className="slide" style={{ transform: slideIndex === 1 ? 'translateX(0)' : 'translateX(100%)' }}>
        <h2>Slide 2</h2>
      </div>
      <div className="slide" style={{ transform: slideIndex === 2 ? 'translateX(0)' : 'translateX(100%)' }}>
        <h2>Slide 3</h2>
      </div>
      <div className="slide" style={{ transform: slideIndex === 3 ? 'translateX(0)' : 'translateX(100%)' }}>
        <h2>Slide 4</h2>
      </div>
      


      <div className="box-navbutt">
        <button
          className={`navbutt ${slideIndex === 0 ? 'active' : ''}`}
          onClick={() => buttSlide(0)}
        />
        <button
          className={`navbutt ${slideIndex === 1 ? 'active' : ''}`}
          onClick={() => buttSlide(1)}
        />
        <button
          className={`navbutt ${slideIndex === 2 ? 'active' : ''}`}
          onClick={() => buttSlide(2)}
        />
                <button
          className={`navbutt ${slideIndex === 3 ? 'active' : ''}`}
          onClick={() => buttSlide(3)}
        />
      </div>

      <button id="prev" onClick={() => nextSlide(-1)}>❮</button>
      <button id="next" onClick={() => nextSlide(1)}>❯</button>
    </div>
  );
}

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
      <button  class="main_buttons" id='fifth-button' onClick={CycleTheme}>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>
    </div>
  );
}

function CreateText() {
  const [text, changeText] = useState("Header №1");

  return (
    <>
      <h2 id="forehead">This is {text}</h2>
      <div className='buttflex'>
        <button class="main_buttons" onClick={() => changeText("Header №1")}>Click me for different header!</button>
        <button class="main_buttons" onClick={() => changeText("Header №2")}>Click me for different header!</button>
        <button class="main_buttons" onClick={() => changeText("Header №3")}>Click me for different header!</button>
        <button class="main_buttons" onClick={() => changeText("Header №4")}>Click me for different header!</button>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ThemeChange />
      <h1 id="mainheader">Factify</h1>
      <CreateText />      
      <Carousel />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;