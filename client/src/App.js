import './App.css'
import HomePage from './page/HomePage/Homepage'
import { Routes, Route } from 'react-router-dom'
import RegPage from './page/RegPage/RegPage'
import AuthPage from './page/AuthPage/AuthPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/reg' element={<RegPage />}></Route>
      <Route path='/auth' element={<AuthPage />}></Route>
    </Routes>
  );
}

export default App;
