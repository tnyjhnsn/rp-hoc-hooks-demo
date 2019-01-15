import React, { Fragment } from 'react'

export default ({ value, setValue }) => (
  <Fragment>
    <div>AUD: {value.toFixed(2)}</div>
    <button onClick={() => setValue(value + 1)}>+1</button>
    <button onClick={() => setValue(value - 1)}>-1</button>
  </Fragment>
)
