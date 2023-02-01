import React from 'react';
import './Posts.css';
import Post from './Post';

const Posts = () => {
	return (
		<section className="Posts">
			<h2>Posts</h2>
			<Post></Post>
			<Post></Post>
			<Post></Post>
		</section>
	);
};

export default Posts;
