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
    <div className="element-background" id="carousel">
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

      <button className="car_buttons" id="prev" onClick={() => nextSlide(-1)}>❮</button>
      <button className="car_buttons" id="next" onClick={() => nextSlide(1)}>❯</button>
      <button className="car_buttons" id="prev" onClick={() => nextSlide(-1)}>❮</button>
      <button className="car_buttons" id="next" onClick={() => nextSlide(1)}>❯</button>
    </div>
  );
}

function ThemeChange() {
  const [i, changei] = useState(0);
  const [i2, changei2] = useState(0);

  const themes = ["whiteButton", "whiteButton", "blueButton"];
  const themes2 = ["blueButton", "blackButton", "whiteButton"];
  const backgroundThemes = ["blueBackground", "blackBackground", "whiteBackground"];

  const CycleTheme = () => {
    const nextIndex = (i + 1) % themes.length;
    const nextIndex2 = (i2 + 1) % themes2.length;
    changei(nextIndex);
    changei2(nextIndex2);
    changei2(nextIndex2);

    const buttons = document.getElementsByClassName("main_buttons");
    const carButt = document.getElementsByClassName("car_buttons");

    for(let button of buttons)
    {
    for(let button of buttons)
    {
      button.classList.remove("whiteButton", "blueButton");
    }

    
    for(let button of carButt)
    {
      button.classList.remove("whiteButton", "blueButton", "blackButton");
    }  

    document.body.classList.remove(...backgroundThemes);    
    }

    
    for(let button of carButt)
    {
      button.classList.remove("whiteButton", "blueButton", "blackButton");
    }  

    document.body.classList.remove(...backgroundThemes);    

    document.body.classList.add(backgroundThemes[nextIndex]);

    for(let button of buttons)
    {

    for(let button of buttons)
    {
      button.classList.add(themes[nextIndex]);
    }

    for(let button of carButt)
    {
      button.classList.add(themes2[nextIndex]);
    }
    }

    for(let button of carButt)
    {
      button.classList.add(themes2[nextIndex]);
    }
  };

  return (
    <div id='second-box'>
      <button  className="main_buttons" id='fifth-button' onClick={CycleTheme}>
      <button  className="main_buttons" id='fifth-button' onClick={CycleTheme}>
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
        <button className="main_buttons" onClick={() => changeText("the best Header!")}>Click me for different header!</button>
        <button className="main_buttons" onClick={() => changeText("the sad Header...")}>Click me for different header!</button>
        <button className="main_buttons" onClick={() => changeText("the header nobody likes :(")}>Click me for different header!</button>
        <button className="main_buttons" onClick={() => changeText("the popular header!!!")}>Click me for different header!</button>
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