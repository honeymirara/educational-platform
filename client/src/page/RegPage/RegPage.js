import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css'


export default function RegPage() {
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}></div>
                <div className={style.signUp}>
                    <h1>Sign Up</h1>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div >
                        <input type="text" />
                    </div>
                    <div className={style.btn}>Sign Up</div>
                </div>

                <div className={style.signUpImg}></div>
            </div>
            <Footer />
        </div >

    )
} 