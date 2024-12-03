export default function Input({labelName, investmentDataHandler, value}) {
    return(
        <div>
            <label>{labelName}</label>
            <input type="number" name={labelName} onChange={investmentDataHandler} value={value}/>
        </div>
    )
}