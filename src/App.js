import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("useEffect on darkTheme change");
    const myElement = document.querySelector("body");
    if (darkTheme) {
      myElement.classList.add("dark-theme");
    } else {
      myElement.classList.remove("dark-theme");
    }
  }, [darkTheme]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    console.log("useEffect interval");
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log("useEffect on time change");
    const seconds = time.getSeconds();
    if (seconds % 10 === 6 && !darkTheme) {
      // BAG BAG BAG
      // нельзя переключить мгновенно когда уже 6, но ещё не 7
      setDarkTheme(true);
    }
  }, [time, darkTheme]);

  return (
    <div className="App">
      <p>Now: {Number(time)}</p>
      <p>Now: {time.toLocaleString()}</p>
      <p>Sec: {time.getSeconds()}</p>
      <p>
        До переключения темы на ночную осталось: {((Math.ceil(time.getSeconds() / 10) * 10 - 4) - time.getSeconds() + 10) % 10} сек.
      </p>
      <p>theme: {darkTheme ? "dark" : "white"}</p>
      <button onClick={() => setDarkTheme((init) => !init)}>
        Change theme
      </button>
    </div>
  );
}

export default App;
