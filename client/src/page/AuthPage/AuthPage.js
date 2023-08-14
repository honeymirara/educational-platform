import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css';

export default function AuthPage() {
    const arr = ["email", "pwd"];
    const result = arr.map((el)=>(
        <div>
            <input type="text" placeholder={el}/>
        </div>
    ))
    return (
        <>
            <Header />
            <div className={style.login}>
                <div className={style.info}>
                    <h1>Login</h1>
                    {result}
                    <div className={style.btn}>Login</div>

                </div>
                <div className={style.loginImg}></div>
            </div>
            <Footer />
        </>
    )
}