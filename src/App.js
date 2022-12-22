import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/todos' element={<Todos/>}/>
      </Routes>
    </div>
  );
}

export default App;
