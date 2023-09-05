import style from './style.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className={style.wrapper}>
            <h1><Link to={"/"}>Hschool</Link></h1>
            <div className={style.btns}>
                <div className={style.loginBtn}>
                    <Link to={"/auth"}>Login →</Link></div>
                <div className={style.regBtn}>
                    <Link to={"/reg"}>Sign up</Link></div>
            </div>
        </div>
    )
}


