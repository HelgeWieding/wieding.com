// import fs from "fs";
// import path from "path";
// import grayMatter from "gray-matter";
import { getPosts } from './_posts.js';

export function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});

	const posts = getPosts();
	console.log(posts);
	
	res.end(JSON.stringify(posts));
}