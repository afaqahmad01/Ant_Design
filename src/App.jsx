import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hello World</div>
      <p>temp is it</p>
      <div className="bg-red-800 text-gray-500">This shortcuts are working</div>
      <div className="bg-gray-500 text-red-900">This shortcuts are working</div>
    </>
  );
}

export default App;
