import React, { Component } from 'react'
import CustomerList from './components/customerlist'


class App extends Component {
  render() {
    
    return (
      <div className="container">
        <CustomerList  />
      </div>
    )

  }
}

export default App