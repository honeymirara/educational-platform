import { useParams } from 'react-router-dom';



export default function CoursePage() {
    const { id } = useParams()
    return (
        <>
            <h1>Good morning!!!</h1>
            <p>{id}</p>
        </>
    )
}