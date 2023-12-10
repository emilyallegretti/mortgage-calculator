// Component for the user input section of the page.
export function LoanInputsBlock({ onGenerateClicked }) {
    // return the section of the page that holds required input fields for the user's loan information
    return (
        <div class="inputs-block">
            <h2>Enter the following information:</h2>
            <form action={(formData) =>
                onGenerateClicked(formData)}>
                <label for="total_loan_amt">Total Loan Amount (w/o Commas)</label>
                <input type="number" min="0" id="total_loan_amt" name="Total Loan Amount"></input>
                <br />
                <label for="loan_length">Length of Loan (Months)</label>
                <input type="number" step="1" min="0" id="loan_length" name="Length of Loan"></input>
                <br />
                <label for="interest_rate">Annual Interest Rate</label>
                <input type="number" step=".1" min="0" id="interest_rate" name="Interest Rate"></input>
                <br />
                <label for="start_date">Loan Start Date</label>
                <input type="date" id="start_date" name="Start Date"></input>

                <br />
                <button type="submit">Generate Payment Schedule</button>
            </form>
        </div>

    )
}