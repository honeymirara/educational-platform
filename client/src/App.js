import './App.css'
import HomePage from './page/HomePage/Homepage'
import { Routes, Route } from 'react-router-dom'
import RegPage from './page/RegPage/RegPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/reg' element={<RegPage />}></Route>
    </Routes>
  );
}

export default App;
