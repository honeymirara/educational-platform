import './App.css'
import HomePage from './page/HomePage/Homepage'
import { Routes, Route } from 'react-router-dom'
import RegPage from './page/RegPage/RegPage'
import AuthPage from './page/AuthPage/AuthPage';
import StudentPage from './page/StudentPage/StudentPage';
import CoursePage from './page/CoursePage/CoursePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/reg' element={<RegPage />}></Route>
      <Route path='/auth' element={<AuthPage />}></Route>
      <Route path='/student' element={<StudentPage />}></Route>
      <Route path='/course/:id' element={<CoursePage />}></Route>

    </Routes>
  );
}

export default App;
