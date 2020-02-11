import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';


class App extends React.Component {


  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerNewContainer = () => <h1>Customer new Container</h1>;

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />

          <Switch>
            <Route path="/customer/new" component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" component={this.renderCustomerContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
