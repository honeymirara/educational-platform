import { Route, Routes } from 'react-router-dom';
import RegPage from '../page/RegPage/RegPage';
import AuthPage from '../page/AuthPage/AuthPage';
import StudentPage from '../page/StudentPage/StudentPage';
import CoursePage from '../page/CoursePage/CoursePage'
import HomePage from '../page/HomePage/Homepage';

export default function RoutesProvider(isAuth) {
    if (isAuth) {
        return (
            <Routes>
                <Route path='/' element={<StudentPage />}></Route>
                <Route path='/course/:id' element={<CoursePage />}></Route>

            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/reg' element={<RegPage />}></Route>
                <Route path='/auth' element={<AuthPage />}></Route>
            </Routes>
        )
    }
}