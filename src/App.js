
// import { Route } from "react-router-dom";
import './App.css';
import DefaultHOC from "./HOC/Default.HOC";
import Homepage from "./pages/Home.page";




function App() {
  return (
    <>
      <DefaultHOC path ="/" exact component={Homepage} />
    </>

  );
}

export default App;