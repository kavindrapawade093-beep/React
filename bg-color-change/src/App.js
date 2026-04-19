import { useState, useEffect } from "react";


function App() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);



  return (
    <>
      {/* Main UI */}
      <div style={{ height: "100vh" }}></div>

      {/* Bottom buttons */}
      <div
        style={{
          position: "fixed",
          bottom: "50px",
          width: "100%",
          textAlign: "center",

        }}
      >
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("orange")}>Orange</button>
      </div>

    </>
  );
}

export default App;


