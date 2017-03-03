import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import { loadFilteredProducts } from '../reducers/products'

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.params.category) {
    return { products: state.products }
  } else {
    return {
      products: state.products.filter(function (product) {
        return product.category === ownProps.params.category
      }),
      category: ownProps.category,
    }
  }
}

export default connect(mapStateToProps)(Products);
