export default function InputGroup() {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label> INITIAL INVESTMENT</label>
                    <input type="number" />
                </div>
                <div>
                    <label>ANUAL INVESTMENT</label>
                    <input type="number" />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>EXPECTED RETURN</label>
                    <input type="number" />
                </div>
                <div>
                    <label>DURATION {"(IN YEARS)"}</label>
                    <input type="number" />
                </div>
            </div>
        </div>
    )
}