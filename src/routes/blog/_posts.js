import fs from 'fs';
import path from 'path';
import marked from 'marked';

export function getPosts () {
	const slugs = fs.readdirSync('content')
		.filter(file => path.extname(file) === '.md')
		.map(file => file.slice(0, -3));
	
		// console.log(slugs.map(getPost));
		
		return slugs.map(getPost);
}

export function getPost(slug) {
	const file = `content/${slug}.md`;
	
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content, metadata } = process_markdown(markdown);

	const date = new Date(`${metadata.pubdate} EDT`); // cheeky hack
	metadata.dateString = date.toDateString();

	const html = marked(content);

	return {
		slug,
		metadata,
		html
	};
}

function process_markdown(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const frontMatter = match[1];
	const content = markdown.slice(match[0].length);

	const metadata = {};
	frontMatter.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':');
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});

	return { metadata, content };
}