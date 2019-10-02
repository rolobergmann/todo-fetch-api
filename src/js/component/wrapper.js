import React from "react";
import "./wrapper.css";
import Header from "./header.js";
import TodoInput from "./todoInput.js";
import List from "./list.js";

export class Wrapper extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="todo-wrapper">
					<Header />
					<TodoInput />
					<List />
				</div>
			</div>
		);
	}
}
