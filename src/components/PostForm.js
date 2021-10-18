import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
		}
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	onSubmit = (event) => {
		event.preventDefault();
		const dataToSend = {
			title: this.state.title,
			body: this.state.body
		}

		this.props.createPost(dataToSend);
	}

	render() {
		return(
			<div>
				<h1> ADD POST </h1>
				<form onSubmit={this.onSubmit}>
					<input type="text" name="title" placeholder="Enter Post Tile" value={this.state.title} onChange={this.onChange}/>
					<br />
					<textarea placeholder="Enter Post Body" name="body" value={this.state.body} onChange={this.onChange}/>
					<br />
					<button type="submit"> SUBMIT </button>
				</form>
			</div>
		);
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm);