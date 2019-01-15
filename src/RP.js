import React, { useState, Fragment } from 'react'
import Display from './Display'

export default ({ render }) => {
  const [value, setValue] = useState(0)
  return (
    <Fragment>
      <Display value={value} setValue={setValue} />
      {render(value)}
    </Fragment>
  )
}
