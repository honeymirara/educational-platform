export default function Input({ arr, value, setValue }) {
   
    function setInputValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    const result = arr.map((el, index) => (
        <div key={index}>.
            <input type="text" name={el} onChange={setInputValue} placeholder={el} />
        </div>
    ))
    return (
        <div>
            {result}
        </div>
    )
}