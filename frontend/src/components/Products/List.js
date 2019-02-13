import React from 'react';
import { compose } from 'redux';

import { connect } from 'react-redux';
import isContainer from 'Hoc/isContainer';
import { loadProducts } from 'Actions/products';
import Product from 'Components/Products/Product';
const Products = ({data, ...props}) => {

	return (
	<div>
        {data.map((product,i) => 
            <div key={`product-container-${product.sku}`}>
                <Product data={product} key={`product-${product.sku}`} />
            </div>
        )}
    </div>
	)
}

export default compose(
    isContainer({
        data: {
            loadAction: loadProducts,
            entityGroup: 'products',
            entityKey: 'list',
            stateParam: (state) => state.customer.customerstatus
        }
    })
)(Products);



