import React, { Component } from 'react'
import  formatCurrency  from "../util.js";

export default class Products extends Component {
    render() {
        return (
					<div>
						{!this.props.products ? (
							<div>Loading</div>
						) : (
							<ul className='products'>
								{this.props.products.map((product) => (
									<li key={product._id}>
										<div className='product'>
											<a href={"#" + product._id}>
												<img src={product.image} alt={product.title} />
												<p>{product.title}</p>
											</a>
											<div className='product-price'>
												<div>{formatCurrency(product.price)}</div>
												{}
												<button onClick={(e)=>this.props.addToCart(product)} className='button primary'>Add TO Cart</button>
											</div>
										</div>
									</li>
								))}
							</ul>
						)}
					</div>
				);
    }
}
