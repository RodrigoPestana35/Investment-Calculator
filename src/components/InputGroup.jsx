import Input from "./Input";

export default function InputGroup({investmentDataHandler, data}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <Input labelName="INITIAL INVESTMENT" investmentDataHandler={(e) => investmentDataHandler(e, "initialInvestment")} value={data.initialInvestment}/>
                <Input labelName="ANNUAL INVESTMENT" investmentDataHandler={(e) => investmentDataHandler(e, "annualInvestment")} value={data.annualInvestment}/>
            </div>
            <div className="input-group">
                <Input labelName="EXPECTED RETURN" investmentDataHandler={(e) => investmentDataHandler(e, "expectedReturn")} value={data.expectedReturn}/>
                <Input labelName="DURATION" investmentDataHandler={(e) => investmentDataHandler(e, "duration")} value={data.duration}/>
            </div>
        </div>
    )
}