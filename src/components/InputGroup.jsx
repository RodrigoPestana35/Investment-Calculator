import Input from "./Input";

export default function InputGroup({ investmentDataHandler, data }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <Input labelName="INITIAL INVESTMENT" investmentDataHandler={(e) => investmentDataHandler(e, "initialInvestment")} value={data.initialInvestment} />
                </p>
                <p>
                    <Input labelName="ANNUAL INVESTMENT" investmentDataHandler={(e) => investmentDataHandler(e, "annualInvestment")} value={data.annualInvestment} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <Input labelName="EXPECTED RETURN" investmentDataHandler={(e) => investmentDataHandler(e, "expectedReturn")} value={data.expectedReturn} />
                </p>
                <p>
                    <Input labelName="DURATION" investmentDataHandler={(e) => investmentDataHandler(e, "duration")} value={data.duration} />
                </p>
            </div>
        </section>
    )
}