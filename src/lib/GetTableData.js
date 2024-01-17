// This module defines helper functions for calculating mortgage payment data to populate the schedule table with.

// given the user's loan information input, generates the 2D array of data that will be displayed in the schedule table component.
export function getTableData(input) {
    const rows = input.length // there will be as many rows in the table as months in the loan
    const cols = 7   // amount of data points being presented in each row, along with space for an id
    let data = Array.from({ length: rows }, () => Array(cols).fill(undefined)) // create an empty rows x cols array 

    // calculate M
    // M = total monthly payment
    const M = calcMonthlyPayment(input)

    // instantiate loop variables
    let remainingPrinciple = Number(input.totalLoanAmount)   // remaining balance starts off as total loan amount
    let totInterestPaid = 0
    let payDate = (new Date(input.loanStartDate))
    payDate.setDate(payDate.getDate() + 1)
    payDate=payDate.toDateString()
    const rate = Number(input.annualInterestRate) / 12.0
    // for each row, populate the array of payment info for that month
    for (let i = 0; i < input.length; i++) {
        // set id, starting at 1
        data[i][0] = i+1
        // pay date
        data[i][1] = payDate.substring(4)   // cut off the day of week from date string, not needed
        payDate = updatePayDate(payDate)

        // total monthly payment
        data[i][2] = M

        // interest owed = remaining balance * interest rate
        let currInterest = remainingPrinciple * rate
        data[i][4] = currInterest

        //principle owed = monthly - interest
        let currPrinciple = M - currInterest
        data[i][3] = currPrinciple

        // principle remaining
        remainingPrinciple -= currPrinciple
        data[i][5] = remainingPrinciple < 0 ? 0 : remainingPrinciple

        // total interest paid
        totInterestPaid += currInterest
        data[i][6] = totInterestPaid
    }
    return data
}
function calcMonthlyPayment(input) {
    let P = Number(input.totalLoanAmount)
    let r = Number(input.annualInterestRate / 12.0)
    let n = Number(input.length)
    return P * (
        (r * (1 + r) ** n) /
        ((1 + r) ** n - 1)
    )
}
// adds 1 month to the current date string 
function updatePayDate(currDate) {
    let date = new Date(currDate)   // get Date representation of current date
    date.setMonth((date.getMonth() + 1) % 12)
    if (date.getMonth() == 0) {
        date.setFullYear(date.getFullYear() + 1)
    }
    return date.toDateString()
}