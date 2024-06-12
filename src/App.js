
// import { Route } from "react-router-dom";
import './App.css';
import DefaultHOC from "./HOC/Default.HOC";
import Homepage from "./pages/Home.page";
import MovieHOC from './HOC/Movie.HOC';
import Movies from './pages/Movies.page';

function App() {
  return (
    <>
      <DefaultHOC path ="/" exact component={Homepage} />
      <MovieHOC path ="/movie/:id" exact component={Movies} />
      
    </>

  );
}

export default App;