import React, { Component } from "react";
import formatCurrency from "../util";

export default class Cart extends Component {
	render() {
		const { cartItems } = this.props;

		return (
			<div>
				{cartItems.length == 0 ? (
					<div className='cart cart-header'>Cart Is Empty</div>
				) : (
					<div className='cart cart-header'>
						You have {cartItems.length} in the cart
					</div>
				)}
				<div>
					<div>
						<ul className='cart-items'>
							{cartItems.map((item, index) => (
								<li key={index}>
									<div>
										<img src={item.image} alt={item.title} />
									</div>
									<div>
										<div>{item.title}</div>
										<div className='right' style={{ textAlign: "right" }}>
											{formatCurrency(item.price)}x{item.count}
											<button onClick={() => this.props.removeFromCart(item)}>
												remove
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					{cartItems.length == 0 ? null : (
						<div className='total'>
							<div>
								Total:{" "}
								{formatCurrency(
									cartItems.reduce((a, c) => a + c.price * c.count, 0)
								)}
							</div>
							<button className='button primary'>Proceed</button>
						</div>
					)}
				</div>
			</div>
		);
	}
}
