import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import style from './style.module.css';
import { Link } from "react-router-dom";

export default function StudentPage() {
    const arr = [{
        id: 1,
        name: 'Javascript',
        text: 'JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.',
        image: './assets/image\ 55.png'
    },
    {
        id: 2,
        name: 'Typescript',
        text: "TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules",
        image: './assets/developer.jpg'
    },
    {
        id: 3,
        name: 'Python',
        text: 'Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.',
        image: './assets/code.jpg'
    }];

    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.image}></div>
                </div>
                <div className={style.list}>
                    {
                        arr.map((el) => (
                            <Link to={`/course/${el.id}`}>
                                <div className={style.courseContainer}>
                                    <div className={style.imageCourse1}></div>
                                    <div className={style.informationCourse}>
                                        <h2>{el.name}</h2>
                                        <p>{el.text}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                        )
                    }
                </div>

                <h1></h1>
            </div>
            <Footer />


        </>

    )
}
