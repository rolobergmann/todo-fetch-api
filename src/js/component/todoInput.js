import React from "react";
import "./todoInput.css";

export default class TodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			list: ["holasdfasd"]
		};

		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.addValue = this.addValue.bind(this);
	}

	addItem(value) {
		value.preventDefault();
		let b = this.state.list.slice();
		console.log(b);
		b.push(this.state.value);
		console.log(b);
		this.setState({
			list: b
		});
	}

	addValue = event => {
		this.setState({
			value: event.target.value
		});
	};

	removeItem(id) {
		console.log("hello");

		this.setState({
			list: this.state.list.filter((item, index) => item.id !== id)
		});
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item">
						<br />
						<form onSubmit={this.addItem}>
							<input
								type="text"
								className="form-control-plaintext"
								placeholder="What needs to be done?"
								onChange={this.addValue}
							/>
						</form>
					</li>
					{this.state.list}
					{this.state.list.map(a => {
						<div>
							<li>{a}</li>
						</div>;
					})}
				</ul>
			</div>
		);
	}
}
