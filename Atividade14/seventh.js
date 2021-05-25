const http = require('http');

const server = http.createServer(function(req, res) {
	const path = req.url;

	if (path === '/historia') {
		res.end('<html><body>História da fatec sorocaba</body></html>');
	}
	else if (path === '/cursos') {
		res.end('<html><body>Cursos</body></html>');
	}
	else if (path === '/professores') {
		res.end('<html><body>Professores</body></html>');
	}
	else {
		res.end('<html><body>Site da fatec sorocaba</body></html>');
	}
});

server.listen(3000, () => console.log('Server listening on localhost://3000'));
