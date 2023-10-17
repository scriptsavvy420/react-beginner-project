import { useState } from "react";
function App() {
  const [color, setColor] = useState("purple");
  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}></div>
      <div className="bar fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="colors flex flex-wrap justify-center gap-5 shadow-xl bg-white px-5 py-5 rounded-2xl">
          <button className="outline-none px-4" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none px-4" style={{ backgroundColor: "green" }} onClick={() => setColor("Yellow")}>Yellow</button>
          <button className="outline-none px-4" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>blue</button>
          <button className="outline-none px-4" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>black</button>
          <button className="outline-none px-4" style={{ backgroundColor: "brown" }} onClick={() => setColor("brown")}>brown</button>
          <button className="outline-none px-4" style={{ backgroundColor: "darkblue" }} onClick={() => setColor("darkblue")}>darkblue</button>
        </div>
      </div>
    </>
  );
}
export default App;