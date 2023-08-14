import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css'


export default function RegPage() {
    const arr = ['name', 'last name', 'email', 'pwd'];
    const result = arr.map((el)=>(
        <div>
            <input type="text" placeholder={el}/>
        </div>
    ));
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}></div>
                <div className={style.signUp}>
                    <h1>Sign Up</h1>
                   {result}
                    <div className={style.btn}>Sign Up</div>
                </div>

                <div className={style.signUpImg}></div>
            </div>
            <Footer />
        </div >

    )
} 