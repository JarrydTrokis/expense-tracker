import React, { Component } from 'react'
import { render } from 'react-dom'

if (module.hot) {
  module.hot.accept()
}

class ExpenseApp extends Component {
  state = {
    expenses: []
  }

  render () {
    return (
      <div>
        <h1>Hello React!</h1>

      </div>
    )
  }
}

render(<ExpenseApp />, document.getElementById('app'))
