export default function Input(obj) {
    return (
        <div>
            {obj.arr.map((el, index) => (
                <div key = {index}>
                    <input type="text" placeholder={el} />
                </div>
            ))}
        </div>
    )
}