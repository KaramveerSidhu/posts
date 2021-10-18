import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
	return function(dispatch) {
		fetch("https://jsonplaceholder.typicode.com/posts")
		.then(res => res.json())
		.then(posts => {
			return dispatch({
				type: FETCH_POSTS,
				payload: posts,
			});
		})
	}
}

export function createPost(postData) {
	return function(dispatch) {
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify(postData)
		})
		.then(res => res.json())
		.then(data => {
			return dispatch({
				type: NEW_POST,
				payload: data,
			});
		})
	}
}