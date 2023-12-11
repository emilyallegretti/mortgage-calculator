// Component for the user input section of the page.
export function LoanInputsBlock({ onGenerateClicked }) {
    // return the section of the page that holds required input fields for the user's loan information
    return (
        <>
            <h2>Enter the following information:</h2>
            <form onSubmit={onGenerateClicked}>
                <label htmlFor="total_loan_amt">Total Loan Amount (w/o Commas)</label>
                <input type="number" min="0" id="total_loan_amt" name="Total Loan Amount" required></input>
                <br />
                <label htmlFor="loan_length">Length of Loan (Months)</label>
                <input type="number" min="0" id="loan_length" name="Length of Loan" required></input>
                <br />
                <label htmlFor="interest_rate">Annual Interest Rate</label>
                <input type="number"  min="0" step=".001" id="interest_rate" name="Interest Rate" required></input>
                <br />
                <label htmlFor="start_date">Loan Start Date</label>
                <input type="date" id="start_date" name="Start Date" required></input>

                <br />
                <button type="submit">Generate Payment Schedule</button>
            </form>
            </>

    )
}