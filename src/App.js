import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkTheme, setTheme] = useState(false);

  useEffect(() => {
    const myElement = document.querySelector("body");
    if (darkTheme){
      myElement.classList.remove("dark-theme");
    } else {
      myElement.classList.add("dark-theme");
    }
  }, [darkTheme]);

  const now = new Date();
  const timeString = now.toLocaleTimeString(); // Например: "14:25:07"

  return (
    <div
      className="App"
      // style={{
      //   color: "black",
      //   backgroundColor: darkTheme ? "black" : "white",
      //   padding: "10px",
      //   minHeight: "100vh",
      // }}
    >
      <p>Current time: {timeString}</p>
      <p
        // style={{
        //   color: darkTheme ? "white" : "black",
        // }}
      >
        theme: {darkTheme ? "dark" : "white"}
      </p>
      <button onClick={() => setTheme((init) => !init)}>Change theme</button>
    </div>
  );
}

export default App;
