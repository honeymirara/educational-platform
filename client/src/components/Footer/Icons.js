import style from './style.module.css';

export default function Icons(obj) {
    return (
        <>
            {obj.arr.map((el, index) => {
                <div key={index}
                    className={style[el]}> </div>
            })}
        </>
    )
}