import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  const colorChange = () => {
    return setColor((currentColor)=>(currentColor==="white"?"black":"white"))
  };

  return (
    <>
      <div style={{ backgroundColor: color, width: "100%", height: "200px" }}>
        <button style={{marginTop:"45px",marginLeft:"700px"}} onClick={colorChange}>onClick</button>
      </div>
    </>
  );
}

export default App;
