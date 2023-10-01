import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css'
import Input from '../../components/Input/Input'
import axios from 'axios';
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../../Context/Context';


export default function RegPage() {
    const { logIn } = useContext(MyContext)
    const navigate = useNavigate();
    const [value, setValue] = useState({ name: '', surname: '', email: '', pwd: '' });
    const arr = ['name', 'surname', 'email', 'pwd'];

    async function show() {
        const result = await axios.post('http://localhost:3001/api/reg', value, {
            withCredentials: true,
        });
        if (result.data.length) {
            logIn()
            navigate('/');
            console.log(result);
        }
    }

    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}></div>
                <div className={style.signUp}>
                    <h1>Sign on</h1>
                    <Input arr={arr} value={value} setValue={setValue} />
                    <div className={style.btn} onClick={show}>Sign Up</div>
                </div>
                <div className={style.signUpImg}></div>

            </div>

            <Footer />
        </div>
    )
} 