import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css';
import Input from '../../components/Input/Input';
import { useState } from 'react';
import axios from 'axios';


export default function AuthPage() {
    
    const [value, setValue] = useState({ email: '', pwd: '' })
    const arr = ["email", "pwd"];

    async function show(){
    const result = await axios.post('http://localhost:3001/api/auth', value)
    console.log(result);
    }

    
    return (
        <>
            <Header />
            <div className={style.login}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <Input arr={arr} value={value} setValue={setValue}/>
                    <div className={style.btn} onClick={show}>Login</div>

                </div>
                <div className={style.loginImg}></div>
            </div>
            <Footer />
        </>
    )
}