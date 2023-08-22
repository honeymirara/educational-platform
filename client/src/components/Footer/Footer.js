import style from './style.module.css'
import Options from './Options';
import Icons from './Icons';

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.options}>
                <div>
                    <Options arr={["home", "Textbook", "Statistics", "Sprint"]} />
                </div>
                <div>
                    <Options arr={['Alex', 'Gabrial', 'Marcus']} /> </div>
                <div>
                </div>
                <div className={style.line}></div>
            </div>
            <div className={style.line}></div>
            <div className={style.network}>
                <div className={style.icons}>
                    <Icons arr={['gt', 'kotik', 'imgYoutube']} />

                </div>
                <p>©2021 Hschool. Project for Hschool.</p>
            </div>
        </div>
    )
}
