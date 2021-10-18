import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends React.Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newPost) 
			this.props.posts.unshift(nextProps.newPost);
	}

	render() {
		const posts = this.props.posts.map(post => {
			return(
				<div key={post.id} style={{padding: "8px", border: "1px solid white", margin: "16px 0px"}}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			);
		})

		return(
			<div>
				<h1> POSTS </h1>
				{posts}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item,
})

export default connect(mapStateToProps, { fetchPosts })(Posts);