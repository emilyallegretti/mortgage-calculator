// This module defines helper functions for calculating mortgage payment data to populate the schedule table with.

// given the user's loan information input, generates the 2D array of data that will be displayed in the schedule table component.
export function getTableData(input) {
    const rows = input.length // there will be as many rows in the table as months in the loan
    const cols = 7   // amount of data points being presented in each row, along with space for an id
    let data = Array.from({ length: rows }, () => Array(cols).fill(undefined));

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
        data[i][1] = payDate.substring(4)
        console.log("data added to table:",data[i][1])
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
// adds 1 month to the current date string (formatted YYYY-MM-DD)
function updatePayDate(currDate) {
    // get month part of string and parse into int
    let month = parseInt(currDate.substring(5,7), 10)

    let date = new Date(("%s00:00:00", currDate))   // get Date representation of current date
    console.log("date:", date)
    //date.setDate(date.getDate()+1)      // day lags behind when converting to object
    console.log('year:',date.getFullYear())
    date.setMonth((date.getMonth() + 1) % 12)
    if (date.getMonth() == 0) {
        console.log("month:", date.getMonth())
        date.setFullYear(date.getFullYear() + 1)
    }
    console.log("newdate:",date)
   // console.log("newDate chopped:",date.toISOString().substring(0, 10))
    return date.toDateString()
}