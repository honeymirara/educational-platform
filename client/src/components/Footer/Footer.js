import style from './style.module.css'

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.options}>
                <div>
                    <p>Home</p>
                    <p>TextBook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div>
                    <p>Alex</p>
                    <p>Gabrial</p>
                    <p>Marcus</p>
                </div>
            </div>
            <div className={style.line}> </div>
            <div className={style.network}>
                <div className={style.icons}>
                    <div className={style.gt}></div>
                    <div className={style.kotik}></div>
                    <div className={style.imgYoutube}></div>
                </div>
                <p>©2021 Hschool. Project for Hschool.</p>

            </div>
        </div>
    )
}
