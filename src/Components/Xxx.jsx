import React, { Component } from 'react';
import './Product.css';

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

export default class Product extends Component {



  render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: {this.state.cart.length} total items.
        </div>
        <div>Total {this.getTotal()}</div>
        <div>
          {products.map(product => (
            <div key={product.name}>
              <div className="product">
                <span role="img" aria-label={product.name}>{product.emoji}</span>
              </div>
              <button onClick={this.add}>Add</button>
              <button onClick={this.remove}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}