import './App.css'
import { InputBox } from './components/Index'
import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // console.log(options);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount);
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <>
      <InputBox
        fromto="From"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        onAmountChange={(amount) => setAmount(amount)}
        selectCurrency={from}
      />
      <InputBox
        fromto="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectCurrency={to}
        amountDisable
      />
      <button onClick={convert}>Convert</button>
    </>
  )
}

export default App
