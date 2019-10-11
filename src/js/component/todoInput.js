import React from "react";
import "./todoInput.css";

export default class TodoInput extends React.Component {
	state = {
		list: { label: "", done: "" }
	};

	getApi = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/rolo", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				this.setState({ list: data });
				console.log(data); //this will print on the console the exact object received from the server
				console.log(this.state.list); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};
	newTodoApi = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/rolo", {
			method: "POST",
			body: ["tre"],
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};
	deleteApi = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/rolo", {
			method: "DELETE",
			body: [],
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item">
						<button onClick={this.getApi}>Get!</button>
					</li>
					<li className="list-group-item">
						<button onClick={this.newTodoApi}>Add List!</button>
					</li>
					<li className="list-group-item">
						<button onClick={this.deleteApi}>delete!</button>
					</li>
				</ul>
			</div>
		);
	}
}
