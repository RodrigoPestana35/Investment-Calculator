import Input from "./Input";

export default function InputGroup() {
    return (
        <div id="user-input">
            <div className="input-group">
                <Input labelName="INITIAL INVESTMENT" />
                <Input labelName="ANNUAL INVESTMENT" />
            </div>
            <div className="input-group">
                <Input labelName="EXPECTED RETURN" />
                <Input labelName="DURATION" />
            </div>
        </div>
    )
}