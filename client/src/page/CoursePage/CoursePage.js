import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
/* import arr from '../../storage/course.json'; */
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.css';
import axios from 'axios';





function CoursePage() {
    const { id } = useParams()
    const [value, setValue] = useState({})
    const [lesson, setLesson] = useState([]);


    async function getAllCourses() {
        const response = await axios.get(`http://localhost:3001/course/${id}`)
        console.log(response);
        setValue(response.data[0])
    }

    async function getAllLessons() {
        const response = await axios.get(`http://localhost:3001/lessons/${id}`);
        console.log(response);
        setLesson(response.data)
    }

    useEffect(() => {
        console.log(value)
        getAllCourses();
        getAllLessons()
    }, [])

    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.course}>
                    <div className={style.flex}>
                        <div className={style.img}></div>
                        <div className={style.informationCourse}>
                            {/* <h2>{value.title}</h2> */}
                            {/* <p>{value.text}</p> */}

                        </div>
                    </div>
                    <div className={style.btn}>Go to Course</div>
                </div>

                <div className={style.lessons}>
                    <div className={style.text}>
                        <div className={style.informationLesson}>
                            <h3>15 Lessons</h3>
                            {lesson.map((el) =>
                                <p key={el.id}>{el.title}</p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CoursePage;