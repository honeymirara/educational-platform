export default function Options(obj) {
    return (
        <div>
            {obj.arr.map((el, index) => (
                <div key={index}>
                     <p>{el}</p>
                </div>

            ))}
        </div>
    )
}
