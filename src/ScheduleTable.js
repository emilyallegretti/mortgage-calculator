// Component for amortization schedule table. 
export function ScheduleTable({ input }) {
    function getTableData() {
        console.log(input)
        //TODO move into new file
        // instantiate a 2-D array that will hold all the data for the table
        const rows = input.length // there will be as many rows in the table as months in the loan
        const cols = 7   // amount of data points being presented in each row, along with space for an id
        let data = Array.from({ length: rows }, () => Array(cols).fill(undefined));

        // calculate M
        // M = total monthly payment
        const M = calcMonthlyPayment()

        // instantiate loop variables
        let remainingPrinciple = Number(input.totalLoanAmount )   // remaining balance starts off as total loan amount
        let totInterestPaid = 0
        let payDate = input.loanStartDate
        const rate=Number(input.annualInterestRate)/12.0
        // for each row, populate the array of payment info for that month
        console.log('remaining principle:', remainingPrinciple)
        console.log('rate:', rate)
        for (let i = 0; i < input.length; i++) {
            // pay date
            data[i][0] = payDate
            updatePayDate(payDate)

            // total monthly payment
            data[i][1] = M

            // interest owed = remaining balance * interest rate
            let currInterest = remainingPrinciple * rate
            data[i][3] = currInterest

            //principle owed = monthly - interest
            let currPrinciple = M - currInterest 
            console.log('currPrinciple:', currPrinciple)
            data[i][2] = currPrinciple

            // principle remaining
            remainingPrinciple -= currPrinciple
            data[i][4] = remainingPrinciple < 0 ? 0 : remainingPrinciple
            console.log('remaining principle:', remainingPrinciple)
            
            // total interest paid
            totInterestPaid += currInterest
            data[i][5] = totInterestPaid

            // set id
            data[i][6] = i
        }
        return data
    }
    function calcMonthlyPayment() {
        let P = Number(input.totalLoanAmount)
        let r = Number(input.annualInterestRate / 12.0)
        let n = Number(input.length)
        console.log(P)
        console.log("'r:", r)
        console.log("n:", n)
        return P * (
            (r * (1 + r) ** n) /
            ((1+r)**n - 1)
        )
    }
    // adds 1 month to the current date string (formatted YYYY-MM-DD)
    function updatePayDate(currDate) {

    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Payment Date</th>
                    <th>Payment Due ($)</th>
                    <th>Principle Due ($)</th>
                    <th>Interest Due ($)</th>
                    <th>Principle Remaining ($)</th>
                    <th>Total Interest to Date ($)</th>
                </tr>
            </thead>
            <tbody>
                {getTableData().map(entry =>
                    <tr key={entry[6]}>
                        <td>{entry[0]}</td>
                        <td>{Number(entry[1].toFixed(2)).toLocaleString()}</td>
                        <td>{Number(entry[2].toFixed(2)).toLocaleString()}</td>
                        <td>{Number(entry[3].toFixed(2)).toLocaleString()}</td>
                        <td>{Number(entry[4].toFixed(2)).toLocaleString()}</td>
                        <td>{Number(entry[5].toFixed(2)).toLocaleString()}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}