import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css';

export default function AuthPage() {
    return (
        <>
            <Header />
            <div className={style.login}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <div>
                        <input type="text" />
                    </div>
                    <div >
                        <input type="text" />
                    </div>
                    <div className={style.btn}>Login</div>

                </div>
                <div className={style.loginImg}></div>
            </div>
            <Footer />
        </>
    )
}