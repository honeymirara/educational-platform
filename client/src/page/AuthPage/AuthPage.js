import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css';
import Input from '../../components/Input/Input'

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
                    <Input arr = {arr}/>
                    <div className={style.btn}>Login</div>

                </div>
                <div className={style.loginImg}></div>
            </div>
            <Footer />
        </>
    )
}