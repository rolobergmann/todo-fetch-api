import React from "react";
import "./todoInput.css";

export default class TodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "test", list: [] };

		this.addItem = this.addItem.bind(this);
	}

	addItem(value) {
		console.log(value);
	}

	handlerSubmit(e) {
		e.preventDefault();
		console.log(e);
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item">
						<div className="form-group">
							<br />
							<form onSubmit={this.handlerSubmit}>
								<input
									type="text"
									className="form-control-plaintext"
									placeholder="What needs to be done?"
									onChange={e =>
										this.setState({ value: e.target.value })
									}
								/>
							</form>
						</div>
					</li>
					<li className="list-group-item">primer elemento</li>
					<li className="list-group-item">{this.state.list}</li>
					<li className="list-group-item">{this.state.list}</li>
				</ul>
				{this.state.value}
			</div>
		);
	}
}
