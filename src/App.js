import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import Movie from './Components/Pages/MovieDetail/Movie';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/movies/:type' element={<MovieList/>}/>
          <Route path='/*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
 
  );
}

export default App;
