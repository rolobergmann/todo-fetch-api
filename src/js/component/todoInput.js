import React from "react";
import "./todoInput.css";

export default class TodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "test" };

		this.addItem = this.addItem.bind(this);
	}

	addItem(value) {
		console.log(value);
	}

	render() {
		return (
			<div>
				<form
					className="commentForm"
					onChange={e => this.setState({ value: e.target.value })}>
					<br />
					<input type="text" placeholder="What needs to be done?" />
					<br />
					{this.state.value}
					<button
						type="submit"
						id="submitbtn"
						onClick={() => this.addItem(this.state.value)}>
						Submit
					</button>
				</form>
			</div>
			/*<div>
            


				<input
					placeholder="What needs to be done?"
                    onChange={e => this.setState({ value: e.target.value })}
                    onKeyPress={this.addItem}
				/>
                
				<br />
                {this.state.value}
            
			</div>*/
		);
	}
}
