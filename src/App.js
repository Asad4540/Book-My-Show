import React from "react";
import './App.css';
import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./Components/temp";

function App() {
  return (
    <>
      <DefaultHOC path ="/" component={Temp} />
    </>

  );
}

export default App;