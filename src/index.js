import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import RP from './RP'
import HOC from './HOC'

const USD = ({ amount }) => <p>USD: {(amount * 0.72).toFixed(2)}</p>
const Euro = ({ amount }) => <p>Euro: {(amount * 0.62).toFixed(2)}</p>

const App = () => {
  return (
    <Fragment>
      <h2>Render Prop Version</h2>
      <RP
        render={amount => {
          return (
            <div>
              <USD amount={amount} />
              <Euro amount={amount} />
            </div>
          )
        }}
      />
      <h2>Higher Order Component Version</h2>
      <HOC currencyComponents={[USD, Euro]} />
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
