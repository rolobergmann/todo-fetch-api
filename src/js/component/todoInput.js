import React from "react";
import "./todoInput.css";

export default class TodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "", list: [] };

		this.addItem = this.addItem.bind(this);
	}

	addItem(todo) {
		todo.preventDefault();
		let a = <li className="list-group-item">{this.state.value}</li>;
		let b = this.state.list;
		b = b.concat(a);
		this.setState({ list: b });
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
								onChange={e =>
									this.setState({ value: e.target.value })
								}
							/>
						</form>
					</li>

					{this.state.list}
				</ul>
				{this.state.value}
			</div>
		);
	}
}
