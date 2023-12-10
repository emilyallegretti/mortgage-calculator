
import { useState } from 'react';
import './App.css';
import { LoanInputsBlock } from './LoanInputsBlock';

function App() {
  const [inputs, setInputs] = useState({
    totalLoanAmount: null,
    totalLoanLength: null,
    annualInterestRate: null,
    loanStartDate: null
  })

  function handleGenerateClicked(loanAmount, loanLength, interestRate, startDate) {
    setInputs({
      totalLoanAmount: loanAmount,
      totalLoanLength: loanLength,
      annualInterestRate: interestRate,
      loanStartDate: startDate
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">Mortgage Amortization Schedule Generator</header>
      <LoanInputsBlock onGenerateClicked={(formData) =>
        handleGenerateClicked(formData.get("Total Loan Amount"), formData.get("Length of Loan"), formData.get("Interest Rate"), formData.get("Start Date"))} />
      <OutputsBlock />
    </div>
  );
}

export default App;
