import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="countent">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            {/* If you need to pass additional props to these components, instead of
            component attribute you should use a render attribute. */}
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            {/* In regular expressions when you append a question mark to an
            expression that means that expression is optional. */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            {/* if you pass exact here, this route will match only if the path is
            exactly this. */}
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
