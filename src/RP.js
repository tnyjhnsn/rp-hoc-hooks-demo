import React, { useState, Fragment } from 'react'
import Display from './Display'

export default ({ render }) => {
  const [value, setValue] = useState(0)
  const display = { value, setValue }
  return (
    <Fragment>
      <Display {...display} />
      {render(value)}
    </Fragment>
  )
}
