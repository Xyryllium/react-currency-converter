import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props
    return (
        <div className="flex">
            <input type="number" className="input" value={amount} onChange={onChangeAmount} />

            <div className="select">
                <select value={selectCurrency} onChange={onChangeCurrency}>
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}

                </select>
            </div>
        </div>
    )
}
