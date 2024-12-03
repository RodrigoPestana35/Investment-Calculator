export default function Input({labelName}) {
    return(
        <div>
            <label>{labelName}</label>
            <input type="number" name={labelName}/>
        </div>
    )
}