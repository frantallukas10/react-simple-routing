import React, { Component } from 'react';

class ProductDetails extends Component {
  handleSave = () => {
    // this.props.history.push('/products');

    // This method is often used in login page, so when the user logs in, and goes to a new page, if they click the back button,
    // you don't want to take them back to the login page.
    this.props.history.replace('/products'); // we didn't go back to the product details page when we was on the products page and click back page...
  };

  render() {
    // console.log(this.props.match.params);

    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
