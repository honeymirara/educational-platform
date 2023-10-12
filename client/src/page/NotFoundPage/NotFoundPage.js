import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import style from './style.module.css';
import { Link } from 'react-router-dom';


function NotFoundPage() {
    return (
        <>
            <Header />
            <div className={style.content}>
                <div className={style.wrapper}></div>

                <p>Error 404</p>
                <h1>Hey buddy</h1>
                <p>We can't seem to find the page you are looking for</p>
                <Link to={'/'}>
                    <div className={style.btn}> return </div>
                </Link>
            </div>


            <div className={style.img}></div>
            <Footer />

        </>
    )

}

export default NotFoundPage;