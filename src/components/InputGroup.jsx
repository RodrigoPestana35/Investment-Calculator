import Input from "./Input";

export default function InputGroup({investmentDataHandler}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <Input labelName="INITIAL INVESTMENT" investmentDataHandler={(e) => investmentDataHandler(e, "initialInvestment")}/>
                <Input labelName="ANNUAL INVESTMENT" investmentDataHandler={(e) => investmentDataHandler(e, "annualInvestment")}/>
            </div>
            <div className="input-group">
                <Input labelName="EXPECTED RETURN" investmentDataHandler={(e) => investmentDataHandler(e, "expectedReturn")}/>
                <Input labelName="DURATION" investmentDataHandler={(e) => investmentDataHandler(e, "duration")}/>
            </div>
        </div>
    )
}