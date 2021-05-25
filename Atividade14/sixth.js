const http = require('http');

const server = http.createServer(function(req, res) {
	res.end('<html><body>Site da fatec sorocaba</body></html>');
});

server.listen(3000, () => console.log('Server listening on localhost://3000'));
