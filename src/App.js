import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './home';
import Movies from './movies'
import  {Provider}  from 'react-redux';
import { store } from './store';
import Seats from './seats';
import Details from './details';
import Login from './login';
function App() {
  return (
    <Provider store={store}>
      <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/movies" element={<Movies/>}></Route>
    <Route path="/seats" element={<Seats/>}></Route>
    <Route path="/details" element={<Details/>}></Route>

   </Routes>
    </Provider>
   
  );
}

export default App;
