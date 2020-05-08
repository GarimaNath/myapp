import React, { Component } from 'react';
import CustomerList from './components/customerlist';
import CreateCustomer from "./components/create-customer.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="container">
        <Route path="/addcustomer" component={CreateCustomer} /><br></br>
        <Route path="/" component={CustomerList} />
        
      </div>
      </Router>
    )

  }
}

export default App