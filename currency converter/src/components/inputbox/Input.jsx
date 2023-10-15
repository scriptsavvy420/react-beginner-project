import {React, useId } from 'react'
function Input({
    fromto,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    amountDisable = false,
    currencyDisable = false
}) {
    const amountId = useId();
    return (
        <>
            <div className='bg-gray-600 p-3'>
                <label
                    htmlFor={amountId}
                    className="text mx-2">{fromto}</label>
                <div className="inputAndSelect">
                    <input
                        id={amountId}
                        type="number"
                        className='m-2 p-2'
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                    <select
                        name="selectCurrency"
                        id="curr"
                        className='p-2'
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Input;