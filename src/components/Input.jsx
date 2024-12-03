export default function Input({labelName, investmentDataHandler}) {
    return(
        <div>
            <label>{labelName}</label>
            <input type="number" name={labelName} onChange={investmentDataHandler}/>
        </div>
    )
}