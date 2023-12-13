import { getTableData } from "./lib/GetTableData"

export function LoanOverview({ input }) {
    let data = getTableData(input)
    return (
        <>
            <h2>Payment Overview</h2>
            <h3>Total Monthly Payment: ${Number(data[0][2].toFixed(2)).toLocaleString()}</h3>
            <h3>Total Cost of Loan: ${Number((Number(input.totalLoanAmount) + data[data.length-1][6]).toFixed(2)).toLocaleString()}</h3>
            <h3>Total Interest Paid: ${Number(data[data.length-1][6].toFixed(2)).toLocaleString()}</h3>
        </>

    )
    
}