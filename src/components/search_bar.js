// import React from 'react';
import React, {Component} from 'react';

// const SearchBar = () => {
// 	return <input />;
// }

// class SearchBar extends React.Component {
class SearchBar extends Component {
	constructor(props){
		super (props);

		this.state = {term: ''};
	}

	// render() {
	// 	return <input onChange={this.onInputChange} />;
	// }
	// // event handler
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
		render() {
		return (
			<div>
			<input 
			value={this.state.term}
			onChange={(event) => this.setState({term: event.target.value})} /> 
			</div>
			);
	}
}

//Updating the state with this.setState() causes the entire component to re-render so the updated state is made to equal the component value
//on the line above when the component re-renders. The component becomes a controlled component because it takes its value from state.
export default SearchBar;