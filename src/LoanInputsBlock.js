// Component for the user input section of the page.
export function LoanInputsBlock({ onGenerateClicked }) {
    // return the section of the page that holds required input fields for the user's loan information
    return (
        <>
            <h2>Enter the following information:</h2>
            <form onSubmit={onGenerateClicked}>
                <label htmlFor="total_loan_amt">Total Loan Amount</label>
                <input type="number" min="0" max="100000000000" id="total_loan_amt" name="Total Loan Amount" required></input>
                <label htmlFor="loan_length">Length of Loan (Months)</label>
                <input type="number" min="1" max="240" id="loan_length" name="Length of Loan" required></input>

                <label htmlFor="interest_rate">Annual Interest Rate</label>
                <input type="number"  min=".0001" max="1" step=".0001" id="interest_rate" name="Interest Rate" required></input>

                <label htmlFor="start_date">Loan Start Date</label>
                <input type="date" id="start_date" name="Start Date" required></input>
                <button type="submit">Generate Payment Schedule</button>
            </form>
            </>
    )
}