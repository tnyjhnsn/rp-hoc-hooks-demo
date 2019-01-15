import React, { useState, Fragment } from 'react'
import Display from './Display'

export default ({ currencyComponents }) => {
  const [value, setValue] = useState(0)
  return (
    <Fragment>
      <Display value={value} setValue={setValue} />
      {currencyComponents.map((CurrencyComponent, i) => (
        <CurrencyComponent key={i} amount={value} />
      ))}
    </Fragment>
  )
}
