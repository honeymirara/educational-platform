import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import style from './style.module.css';
import { Link } from "react-router-dom";
import arr from '../../storage/course.json';
import { Pagination } from '@mui/material';
import { useState, useEffect } from 'react';



export default function StudentPage() {
    const [elements, setElements] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const elementsPerPage = 3;

    useEffect(() =>
        setElements(arr), [currentPage])

    const indexLastElement = currentPage * elementsPerPage; //1*3, 2*3, 3*3
    const indexFirstElement = indexLastElement - elementsPerPage; //3-3, 6-3, 9-3
    const currentElements = elements.slice(indexFirstElement, indexLastElement); //slice(0,3); 3,6; 6,9

    function updateData(event, page) {
        console.log(page);
        setCurrentPage(page);
    }

    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.image}></div>
                </div>
                <div className={style.list}>
                    {
                        currentElements.map((el, index) => (
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
                    )}
                </div>

                <h1></h1>
            </div>
            <div className={style.pagination}>
            <Pagination
                value={currentPage}
                onChange={updateData}
                count={Math.ceil(arr.length / elementsPerPage)}
                color="primary"
                hideNextButton={false}
            />
            </div>

            <Footer />
        </>
    )
}
