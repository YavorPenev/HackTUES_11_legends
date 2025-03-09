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
    }, 9999999999);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="element-background" id="carousel">
      {/* Slide 1 */}
      <div className={`slide ${slideIndex === 0 ? 'active' : 'inactive'}`}>
        <h2 className="carHeader">Slide 1</h2>
        <div className="infoContainer">
          <img src="article1.png" alt="Article 1" />
          <p>Content for slide 1..Content for slide 1...Content for slide 1...Content fo
            r slide 1...Content for slide 1...Content for slide 1...Content for slide 1.
            ..Content for slide 1...Content for slide 1...Content for slide 1...Content 
            for slide 1...Content for slide 1...Content for slide 1...Content for slide 
            1...Content for slide de 1....</p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className={`slide ${slideIndex === 1 ? 'active' : 'inactive'}`}>
        <h2 className="carHeader">Slide 2</h2>
        <div className="infoContainer">
          <img src="article2.png" alt="Article 2" />
          <p>Content for slide 2...Content for slide 2...Content for slide 2...Content for 
            slide 2...Content for slide 2...Content for slide 2...Content for slide 2...Co
            ntent for slide 2...Content for slide 2...Conte
            ide 2...Content for slide 2...Content for slide 2...Content for slide 2...Content for slide 2...</p>
        </div>
      </div>

      {/* Slide 3 */}
      <div className={`slide ${slideIndex === 2 ? 'active' : 'inactive'}`}>
        <h2 className="carHeader">Slide 3</h2>
        <div className="infoContainer">
          <img src="article2.png" alt="Article 3" />
          <p>Content for slide 3...Content for slide 3...Content for slide 3...Content for 
            slide 3...Content for slide 3...Content for slide 3...Content for slide 3...Co
            ntent for slide 3...Coe 3...Content for sl
            ide 3...Content for slide 3...Content for slide 3...Content for slide 3...Content for slide 3...</p>
        </div>
      </div>

      {/* Slide 4 */}
      <div className={`slide ${slideIndex === 3 ? 'active' : 'inactive'}`}>
        <h2 className="carHeader">Slide 4</h2>
        <div className="infoContainer">
          <img src="article2.png" alt="Article 4" />
          <p>Content for slide 4...Content for slide 4...Content for slide 4...Content fo
            r slide 4...Content for slide 4...Content for slide 4...Content for slide 4.
            ..Content for slide 4...Content for slide 4...Content for slide 4...Content for slide 4...</p>
        </div>
      </div>

      {/* Navigation Buttons */}
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

      {/* Navigation Arrows */}
      <button className="car_buttons" id="prev" onClick={() => nextSlide(-1)}>❮</button>
      <button className="car_buttons" id="next" onClick={() => nextSlide(1)}>❯</button>
    </div>
  );
}

function ThemeChange() {
  const [i, changei] = useState(0);
  const [i2, changei2] = useState(0);
  const [indexElement, changeElement] = useState(0);

  const backgroundThemes = ["blueBackground", "blackBackground", "whiteBackground"];
  const themes = ["whiteButton", "whiteButton", "blueButton"];
  const themes2 = ["blueButton", "blackButton", "whiteButton"];
  const elementThemes = ["whiteElement", "whiteElement", "blueElement"];


  const applyTheme = (index) => {
    document.body.classList.remove(...backgroundThemes);
    document.body.classList.add(backgroundThemes[index]);

    const buttons = document.getElementsByClassName("main_buttons");
    const carButt = document.getElementsByClassName("car_buttons");
    const elements = document.getElementsByClassName("element-background");

    for (let button of buttons) {
      button.classList.remove("whiteButton", "blueButton", "blackButton");
      button.classList.add(themes[index]);
    }

    for (let button of carButt) {
      button.classList.remove("whiteButton", "blueButton", "blackButton");
      button.classList.add(themes2[index]);
    }

    for (let element of elements) {
      element.classList.remove("whiteElement", "blueElement", "blackElement");
      element.classList.add(elementThemes[index]);
    }
  };

  useEffect(() => {
    applyTheme(0);
  }, []);

  const CycleTheme = () => {
    const nextIndex = (i + 1) % themes.length;
    changei(nextIndex);
    changei2((i2 + 1) % themes2.length);
    changeElement((indexElement + 1) % elementThemes.length);

    applyTheme(nextIndex);
  };

  return (
    <div id='second-box'>
      <button className="main_buttons" id='fifth-button' onClick={CycleTheme}>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>
    </div>
  );
}

function CreateText() {
  const [text, changeText] = useState("the best Header!");

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