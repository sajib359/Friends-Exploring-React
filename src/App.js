import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1 className="text-6xl font-bold underline">
      Hello world!
    </h1>
      <h1>In this Site I can Explore My Friends using React Routing</h1>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/friends' element={<Friends></Friends>}></Route>
       <Route path='/*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
