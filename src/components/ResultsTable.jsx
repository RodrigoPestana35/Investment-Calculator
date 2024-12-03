import {calculateInvestmentResults, formatter} from '../util/investment';

export default function ResultsTable({investmentData}) {

    const annualData = calculateInvestmentResults(investmentData);

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map((data, index) => {
                    const annualInvestment = (data.annualInvestment * data.year) + investmentData.initialInvestment;
                    const totalInterest = data.valueEndOfYear - annualInvestment;
                    return (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(annualInvestment)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}