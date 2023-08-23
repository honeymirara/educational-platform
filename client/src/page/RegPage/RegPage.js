import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css'
import Input from '../../components/Input/Input'
import { useState } from 'react'


export default function RegPage() {

    const [value, setValue] = useSate({ name: '', surname: '', email: '', pwd: '' });
    const arr = ['name', 'surname', 'email', 'pwd'];


    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}></div>
                <div className={style.signUp}>
                    <h1>Sign on</h1>
                    <Input arr={arr} />
                    <div className={style.btn}>Sign Up</div>
                </div>

                <div className={style.signUpImg}></div>
            </div>
            <Footer />
        </div >

    )
} 