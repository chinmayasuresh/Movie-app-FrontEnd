import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import CarouselWithButton from './components/CarouselWithButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sign from './components/Sign';
import View from './components/View';
import Search from './components/Search';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/add' element={<AddMovie/>}  />
      <Route path='/' element={<CarouselWithButton/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/View' element={<View/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
