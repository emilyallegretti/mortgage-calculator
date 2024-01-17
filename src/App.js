
import { useState } from 'react';
import './App.css';
import { LoanInputsBlock } from './LoanInputsBlock';
import {OutputsBlock} from './OutputsBlock'

function App() {
  // inputs is initialized to null, but will represent an object containing the user input information.
  const [inputs, setInputs] = useState(null)

  // populate inputs with the given information when submit is clicked
  function handleGenerateClicked(formData) {
    // preventDefault prevents browser from reloading page; handle form data w/ javascript instead
    formData.preventDefault()
    let inputs = new FormData(formData.target)
    let loanAmount = inputs.get("Total Loan Amount")
    let loanLength = inputs.get("Length of Loan")
    let interestRate = inputs.get("Interest Rate")
    let startDate = inputs.get("Start Date")
    console.log(startDate)
    setInputs({
      totalLoanAmount: loanAmount,
      length: loanLength,
      annualInterestRate: interestRate,
      loanStartDate: startDate
    })
  }
  // if inputs object is null, don't display any output information
  let output;
  if (inputs) {
    output = <OutputsBlock loanInfo={inputs} />
  } else {
    output=""
  }
  console.log(output)
  
  return (
    <div className="App">
      <h1 className="App-header">Mortgage Amortization Schedule Generator</h1>
      <div className="inputs-block">
      <LoanInputsBlock onGenerateClicked={(formData) =>
          handleGenerateClicked(formData)} />
      </div>
      <div className="outputs-block">
      {output}
      </div>
    </div>
  );
}

export default App;
