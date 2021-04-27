import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {
	constructor(props) {
		super();
		this.state = {
			name: "",
			email: "",
			address: "",
			showCkeckout: false,
		};
	}

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	createOrder = (e) => {
		e.preventDefault();
		const order = {
			name: this.state.name,
			email: this.state.email,
			address: this.state.address,
			cartItems: this.props.cartItems,
		};
		this.props.createOrder(order);
	};
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
					<div className='cart'>
						<Fade left cascade>
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
						</Fade>
					</div>
					{cartItems.length == 0 ? null : (
						<div>
							<div className='total'>
								<div>
									Total:{" "}
									{formatCurrency(
										cartItems.reduce((a, c) => a + c.price * c.count, 0)
									)}
								</div>
								<button
									onClick={() => {
										this.setState({ showCkeckout: true });
									}}
									className='button primary'>
									Proceed
								</button>
							</div>
							{this.state.showCkeckout && (
								<div className='cart'>
									<form onSubmit={this.createOrder}>
										<Fade right cascade>
											<ul className='form-container'>
												<li>
													<label>Email</label>
													<input
														type='email'
														name='email'
														required
														onChange={this.handleInput}
													/>
												</li>
												<li>
													<label>name</label>
													<input
														name='name'
														type='text'
														required
														onChange={this.handleInput}
													/>
												</li>
												<li>
													<label>Address</label>
													<input
														name='address'
														type='text'
														required
														onChange={this.handleInput}
													/>
												</li>
												<li>
													<button className='button primary' type='submit'>
														Checkout
													</button>
												</li>
											</ul>
										</Fade>
									</form>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		);
	}
}
