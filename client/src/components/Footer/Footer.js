import style from './style.module.css'
import Options from './Options';
import Icons from './Icons';

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.options}>
                <div>
                    <Options data={['Home', 'Textbook', 'Statistics', 'Sprint']} />
                </div>

                <div>
                    <Options data={['Alex', 'Gabriel', 'Marcus']} />
                </div>

            </div>

            <div className={style.line}></div>
            <div className={style.network}>
                <div className={style.icons}>
                    <Icons data={['style.gt', 'style.kotik', 'style.imgYoutube']} />
                </div>
                <p>©2021 Hschool. Project for Hschool.</p>
            </div>
        </div >
    )
}
