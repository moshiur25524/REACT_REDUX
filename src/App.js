
import './App.css';
import Counter from './components/Counter/Counter';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
       <h1 className='bg-secondary text-white'>Welcome to React Redux</h1>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/todos' element={<Todos />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
