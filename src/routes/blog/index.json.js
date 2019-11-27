import posts from '../../utils/markdown.js';

let json;

export function get(req, res) {
	if (!json || process.env.NODE_ENV !== 'production') {
		json = JSON.stringify(posts());
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(json);
}
