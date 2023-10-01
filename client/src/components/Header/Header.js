import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import  MyContext  from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const { token, logOut } = useContext(MyContext)
    const navigate = useNavigate();

    function logOutUser() {
        logOut();
        navigate('/')
    }
    return (
        <div className={style.wrapper}>
            <h1>
                <Link to={"/"}>Hschool</Link>
            </h1>
            {token ? (
                <div className={style.regBtn}>
                    <p onClick={logOutUser} className={style.loginBtn}>Sign Out</p>
                </div>
            ) : (
                <div className={style.btns}>
                    <div className={style.loginBtn}>
                        <Link to={"/auth"}>Login →</Link>
                    </div>
                    <div className={style.regBtn}>
                        <Link to={"/reg"}>Sign up</Link>
                    </div>
                </div>

            )}
        </div>
    )
}
