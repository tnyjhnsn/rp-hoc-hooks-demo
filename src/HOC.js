import React, { useState, Fragment } from 'react'
import Display from './Display'

export default ({ currencyComponents }) => {
  const [value, setValue] = useState(0)
  const display = { value, setValue }
  return (
    <Fragment>
      <Display {...display} />
      {currencyComponents.map((CurrencyComponent, i) => (
        <CurrencyComponent key={i} amount={value} />
      ))}
    </Fragment>
  )
}
